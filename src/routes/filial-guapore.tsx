import { createFileRoute } from "@tanstack/react-router";
import { MenuBrowser } from "@/components/MenuBrowser";
import { MENU_GUAPORE } from "@/data/menu";

const t = "Filial Guaporé — Cardápio Bella Citta";
const d = "Cardápio completo da Bella Citta na Av. Heráclito F. S. Pinto, 450, Ribeirão Preto/SP.";

export const Route = createFileRoute("/filial-guapore")({
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
      titulo="Filial Guaporé"
      subtitulo="Cardápio completo da unidade: cafés, lanches, pratos executivos, encomendas para festas e cestas personalizadas."
      menu={MENU_GUAPORE}
      filial="guapore"
    />
  );
}
