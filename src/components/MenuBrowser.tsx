import { useState } from "react";
import { Plus, MapPin } from "lucide-react";
import { brl, FILIAIS, type FilialKey } from "@/data/menu";
import { useCart } from "@/lib/cart";

export function MenuBrowser({
  titulo,
  subtitulo,
  filial,
  menu,
}: {
  titulo: string;
  subtitulo?: string;
  filial: FilialKey;
  menu: Record<string, { nome: string; preco: number; obs?: string }[]>;
}) {
  const categorias = Object.keys(menu);
  const [ativa, setAtiva] = useState(categorias[0] ?? "");
  const { add, setOpen } = useCart();
  const endereco = FILIAIS[filial].endereco;

  const itens = menu[ativa] ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">{titulo}</h1>
      {subtitulo && <p className="mt-2 text-muted-foreground">{subtitulo}</p>}
      {endereco && (
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
          <MapPin size={15} /> {endereco}
        </p>
      )}

      <p className="mt-5 rounded-xl border border-accent/50 bg-accent/15 p-3 text-sm">
        Cardápio digital informativo. O pedido é enviado para o WhatsApp desta unidade
        e só é confirmado por lá. Cada pedido pode conter itens de
        apenas uma filial.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setAtiva(c)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              c === ativa
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-secondary"
            }`}
          >
            {c} ({(menu[c] ?? []).length})
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((i) => (
          <article key={i.nome} className="flex flex-col justify-between p-5 surface-card">
            <div>
              <h3 className="text-base font-bold leading-snug">{i.nome}</h3>
              {i.obs && <p className="mt-1 text-sm text-muted-foreground">{i.obs}</p>}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-lg font-bold text-primary">{brl(i.preco)}</span>
              <button
                onClick={() => {
                  add(i.nome, i.preco, filial);
                  setOpen(true);
                }}
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Plus size={14} /> Adicionar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
