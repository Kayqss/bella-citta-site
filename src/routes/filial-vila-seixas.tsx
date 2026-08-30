import { createFileRoute } from "@tanstack/react-router";
import { MenuBrowser } from "@/components/MenuBrowser";
import { MENU_SEIXAS } from "@/data/menu";

const t = "Filial Vila Seixas — Cardápio Bella Citta";
const d = "Cardápio completo da Bella Citta na R. Casemiro de Abreu, 286, Ribeirão Preto/SP.";

export const Route = createFileRoute("/filial-vila-seixas")({
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
      titulo="Filial Vila Seixas"
      subtitulo="Cardápio completo da unidade: cafés, lanches, pratos executivos, encomendas para festas e cestas personalizadas."
      menu={MENU_SEIXAS}
      filial="seixas"
    />
  );
}
