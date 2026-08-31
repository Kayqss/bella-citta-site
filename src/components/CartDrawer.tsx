import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart, buildWhatsAppLink } from "@/lib/cart";
import { brl, FILIAIS } from "@/data/menu";
import { WhatsAppIcon } from "./SiteHeader";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, inc, dec, remove, clear, filial } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-foreground/40"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-card shadow-[var(--shadow-lift)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-bold">Seu carrinho</h2>
          <button onClick={() => setOpen(false)} aria-label="Fechar carrinho">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {lines.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Seu carrinho está vazio. Escolha os itens do cardápio para montar seu pedido.
            </p>
          )}
          {lines.map((l) => (
            <div
              key={l.nome}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border p-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{l.nome}</p>
                <p className="text-sm text-muted-foreground">{brl(l.preco)}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => dec(l.nome)}
                  aria-label={`Diminuir ${l.nome}`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border"
                >
                  <Minus size={14} />
                </button>
                <span className="w-5 text-center text-sm font-bold">{l.qtd}</span>
                <button
                  onClick={() => inc(l.nome)}
                  aria-label={`Aumentar ${l.nome}`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border"
                >
                  <Plus size={14} />
                </button>
                <button
                  onClick={() => remove(l.nome)}
                  aria-label={`Remover ${l.nome}`}
                  className="grid h-8 w-8 place-items-center rounded-full text-destructive"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-border px-5 py-4">
          {filial && (
            <div className="rounded-lg border border-border p-3 text-sm">
              <p className="font-semibold">Pedido para: {FILIAIS[filial].nome}</p>
              <p className="text-muted-foreground">{FILIAIS[filial].endereco}</p>
              <p className="text-muted-foreground">WhatsApp {FILIAIS[filial].telefone}</p>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Subtotal estimado</span>
            <span className="text-xl font-bold">{brl(subtotal)}</span>
          </div>
          <p className="rounded-lg bg-secondary p-3 text-xs text-secondary-foreground">
            Este site é um cardápio digital informativo. O fechamento e a confirmação do pedido
            acontecem exclusivamente pelo WhatsApp — nenhum pagamento é feito aqui.
            Para entregas, o valor final acresce a taxa de entrega.
          </p>
          <a
            href={buildWhatsAppLink(lines, subtotal, filial)}
            target="_blank"
            rel="noreferrer"
            aria-disabled={lines.length === 0}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity gradient-warm ${
              lines.length === 0 ? "pointer-events-none opacity-50" : "hover:opacity-90"
            }`}
          >
            <WhatsAppIcon /> Enviar pedido pelo WhatsApp
          </a>
          {lines.length > 0 && (
            <button
              onClick={clear}
              className="w-full text-xs font-semibold text-muted-foreground underline"
            >
              Esvaziar carrinho
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
