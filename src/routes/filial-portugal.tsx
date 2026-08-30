import { createFileRoute } from "@tanstack/react-router";
import { MenuBrowser } from "@/components/MenuBrowser";
import { MENU_PORTUGAL } from "@/data/menu";

const t = "Filial Portugal — Cardápio Bella Citta";
const d = "Cardápio completo da Bella Citta na Av. Portugal, 1760, Ribeirão Preto/SP.";

export const Route = createFileRoute("/filial-portugal")({
  head: () => ({
    meta: [
      { title: t },
      { name: "description", content: d },
      { property: "og:title", content: t },
      { property: "og:description", content: d },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <MenuBrowser
      titulo="Filial Portugal"
      subtitulo="Cardápio completo da unidade: cafés, lanches, pratos executivos, encomendas para festas e cestas personalizadas."
      menu={MENU_PORTUGAL}
      filial="portugal"
    />
  );
}
