import { useState } from "react";
import { Plus, MapPin } from "lucide-react";
import {
  brl,
  FILIAIS,
  CATEGORIAS_ENTREGA,
  NOTAS_CATEGORIA,
  PRECIFICACAO,
  type FilialKey,
} from "@/data/menu";
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
  const categoriaEntrega = CATEGORIAS_ENTREGA.has(ativa);
  const notaCategoria = NOTAS_CATEGORIA[ativa];
  const precificacao = PRECIFICACAO[ativa];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">{titulo}</h1>

      {endereco && (
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={15} />
          {endereco}
        </p>
      )}

      {subtitulo && (
        <p className="mt-2 text-muted-foreground">{subtitulo}</p>
      )}

      <p className="mt-5 rounded-xl border border-accent/50 bg-accent/15 p-3 text-sm">
        Cardápio digital informativo. O pedido é enviado para o WhatsApp desta unidade
        e só é confirmado por lá. Entregas disponíveis apenas para a linha de encomendas
        (salgados, mini lanches, wraps, tábuas, baguetes, doces e bolos) — valores
        com taxa de entrega à parte.
      </p>

      <div className="mt-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setAtiva(c)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              c === ativa
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-secondary"
            }`}
          >
            {c} ({(menu[c] ?? []).length})
          </button>
        ))}
      </div>

      {notaCategoria && (
        <p className="mt-5 rounded-xl border border-accent/50 bg-accent/15 p-3 text-sm">
          {notaCategoria}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((i) => (
          <article
            key={i.nome}
            className="flex flex-col justify-between p-5 surface-card"
          >
            <div>
              <h3 className="text-base font-bold leading-snug">{i.nome}</h3>

              {i.obs && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {i.obs}
                </p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-lg font-bold text-primary">
                  {brl(i.preco)}

                  {precificacao && (
                    <span className="ml-1 text-sm font-semibold text-foreground">
                      {precificacao.sufixo}
                    </span>
                  )}
                </span>

                {precificacao && (
                  <span className="block text-xs font-medium text-muted-foreground">
                    Consulte valores para outras quantidades
                  </span>
                )}

                {categoriaEntrega && (
                  <span className="block text-xs font-medium text-muted-foreground">
                    + taxa de entrega
                  </span>
                )}
              </div>

              {categoriaEntrega ? (
                <button
                  onClick={() => {
                    add(
                      i.nome,
                      i.preco,
                      filial,
                      precificacao?.tipo ?? "fixo",
                      precificacao?.padrao,
                    );
                    setOpen(true);
                  }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Plus size={14} /> Adicionar
                </button>
              ) : (
                <span className="shrink-0 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground">
                  Somente na loja
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

