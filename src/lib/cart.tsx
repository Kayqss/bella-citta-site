import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { FILIAIS, brl, type FilialKey } from "@/data/menu";

export type CartLine = { nome: string; preco: number; qtd: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  filial: FilialKey | null;
  add: (nome: string, preco: number, filial: FilialKey) => void;
  inc: (nome: string) => void;
  dec: (nome: string) => void;
  remove: (nome: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [filial, setFilial] = useState<FilialKey | null>(null);

  const value = useMemo<CartCtx>(() => {
    const bump = (nome: string, delta: number) =>
      setLines((prev) => {
        const next = prev
          .map((l) => (l.nome === nome ? { ...l, qtd: l.qtd + delta } : l))
          .filter((l) => l.qtd > 0);
        if (next.length === 0) setFilial(null);
        return next;
      });
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qtd, 0),
      subtotal: lines.reduce((s, l) => s + l.qtd * l.preco, 0),
      filial,
      add: (nome, preco, novaFilial) => {
        if (filial && filial !== novaFilial && lines.length > 0) {
          const ok = window.confirm(
            `Seu carrinho tem itens da ${FILIAIS[filial].nome}. Cada pedido é enviado para uma única unidade. Deseja esvaziar o carrinho e começar um pedido da ${FILIAIS[novaFilial].nome}?`,
          );
          if (!ok) return;
          setFilial(novaFilial);
          setLines([{ nome, preco, qtd: 1 }]);
          return;
        }
        setFilial(novaFilial);
        setLines((prev) =>
          prev.some((l) => l.nome === nome)
            ? prev.map((l) => (l.nome === nome ? { ...l, qtd: l.qtd + 1 } : l))
            : [...prev, { nome, preco, qtd: 1 }],
        );
      },
      inc: (n) => bump(n, 1),
      dec: (n) => bump(n, -1),
      remove: (n) =>
        setLines((prev) => {
          const next = prev.filter((l) => l.nome !== n);
          if (next.length === 0) setFilial(null);
          return next;
        }),
      clear: () => {
        setLines([]);
        setFilial(null);
      },
      open,
      setOpen,
    };
  }, [lines, open, filial]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart precisa estar dentro de CartProvider");
  return ctx;
}

export function buildWhatsAppLink(
  lines: CartLine[],
  subtotal: number,
  filial: FilialKey | null,
) {
  const unidade = filial ? FILIAIS[filial] : null;
  const corpo = lines.map((l) => `• ${l.qtd}x ${l.nome} — ${brl(l.qtd * l.preco)}`).join("\n");
  const msg =
    `Olá, Bella Citta! Gostaria de fazer um pedido.\n\n` +
    `Unidade: ${unidade ? `${unidade.nome} — ${unidade.endereco}` : "A definir"}\n\n` +
    `Itens:\n${corpo}\n\n` +
    `Aguardo a confirmação por aqui. Obrigado!`;
  const numero = unidade?.whatsapp ?? FILIAIS.portugal.whatsapp;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}
