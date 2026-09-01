import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { FILIAIS, brl, formatarQuantidade, type FilialKey } from "@/data/menu";

export type TipoPreco = "fixo" | "cento" | "kg";

export type CartLine = {
  nome: string;
  preco: number;
  qtd: number;
  tipo: TipoPreco;
  /** Quantidade solicitada (unidades ou gramas) para itens sem preço fechado. */
  quantidade?: number;
};

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  temAConfirmar: boolean;
  filial: FilialKey | null;
  add: (
    nome: string,
    preco: number,
    filial: FilialKey,
    tipo?: TipoPreco,
    quantidade?: number,
  ) => void;
  inc: (nome: string) => void;
  dec: (nome: string) => void;
  setQuantidade: (nome: string, quantidade: number) => void;
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
      subtotal: lines.reduce((s, l) => (l.tipo === "fixo" ? s + l.qtd * l.preco : s), 0),
      temAConfirmar: lines.some((l) => l.tipo !== "fixo"),
      filial,
      add: (nome, preco, novaFilial, tipo = "fixo", quantidade) => {
        const nova: CartLine = { nome, preco, qtd: 1, tipo, ...(quantidade !== undefined ? { quantidade } : {}) };
        if (filial && filial !== novaFilial && lines.length > 0) {
          const ok = window.confirm(
            `Seu carrinho tem itens da ${FILIAIS[filial].nome}. Cada pedido é enviado para uma única unidade. Deseja esvaziar o carrinho e começar um pedido da ${FILIAIS[novaFilial].nome}?`,
          );
          if (!ok) return;
          setFilial(novaFilial);
          setLines([nova]);
          return;
        }
        setFilial(novaFilial);
        setLines((prev) =>
          prev.some((l) => l.nome === nome)
            ? prev.map((l) =>
                l.nome === nome && l.tipo === "fixo" ? { ...l, qtd: l.qtd + 1 } : l,
              )
            : [...prev, nova],
        );
      },
      inc: (n) => bump(n, 1),
      dec: (n) => bump(n, -1),
      setQuantidade: (nome, quantidade) =>
        setLines((prev) =>
          prev.map((l) => (l.nome === nome ? { ...l, quantidade } : l)),
        ),
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

export function descreverLinha(l: CartLine) {
  if (l.tipo === "fixo") return `${l.qtd}x ${l.nome} — ${brl(l.qtd * l.preco)}`;
  const q = formatarQuantidade(l.tipo, l.quantidade ?? 0);
  const aprox = l.tipo === "kg" ? `aproximadamente ${q}` : q;
  return `${l.nome} — ${aprox} — preço a confirmar`;
}

export function buildWhatsAppLink(
  lines: CartLine[],
  subtotal: number,
  filial: FilialKey | null,
) {
  const unidade = filial ? FILIAIS[filial] : null;
  const corpo = lines.map((l) => `• ${descreverLinha(l)}`).join("\n");
  const temAConfirmar = lines.some((l) => l.tipo !== "fixo");
  const msg =
    `Olá, Bella Citta! Gostaria de fazer um pedido.\n\n` +
    `Unidade: ${unidade ? `${unidade.nome} — ${unidade.endereco}` : "A definir"}\n\n` +
    `Itens:\n${corpo}\n\n` +
    (subtotal > 0 ? `Subtotal dos itens com preço fechado: ${brl(subtotal)}\n` : "") +
    (temAConfirmar
      ? `Por favor, confirme o valor dos itens vendidos por cento/por peso nas quantidades acima.\n`
      : "") +
    `\nAguardo a confirmação por aqui. Obrigado!`;
  const numero = unidade?.whatsapp ?? FILIAIS.portugal.whatsapp;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}
