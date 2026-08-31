import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Instagram, Coffee, Croissant, Gift, ShoppingBasket, Facebook } from "lucide-react";
import Fachada from "@/assets/Fachada.jpg";
import { FILIAIS, INSTAGRAM, FACEBOOK } from "@/data/menu";
import { WhatsAppIcon } from "@/components/SiteHeader";

const t = "Bella Citta — Padaria e pães especiais em Ribeirão Preto";
const d =
  "Padaria Bella Citta: cardápio das filiais Portugal, Guaporé e Vila Seixas, encomendas de salgados e doces e cestas personalizadas em Ribeirão Preto/SP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t },
      { name: "description", content: d },
      { property: "og:title", content: t },
      { property: "og:description", content: d },
    ],
  }),
  component: Index,
});

const SERVICOS = [
  {
    icon: Coffee,
    titulo: "Cardápio nas lojas",
    texto: "Cafés especiais, lanches, pratos executivos e sucos servidos nas três unidades.",
    to: "/filial-portugal" as const,
    cta: "Ver cardápio",
  },
  {
    icon: Croissant,
    titulo: "Encomendas",
    texto: "Salgados, tábuas de frios, baguetes de 1 metro, mini doces e bolos confeitados — disponíveis no cardápio de cada filial.",
    to: "/filial-portugal" as const,
    cta: "Ver encomendas",
  },
  {
    icon: Gift,
    titulo: "Cestas personalizadas",
    texto: "Cestas de café da manhã e box de presente, dentro do cardápio de cada filial.",
    to: "/filial-guapore" as const,
    cta: "Ver cestas",
  },
];

const UNIDADES = [
  { ...FILIAIS.portugal, to: "/filial-portugal" as const },
  { ...FILIAIS.guapore, to: "/filial-guapore" as const },
  { ...FILIAIS.seixas, to: "/filial-vila-seixas" as const },
];

function Index() {
  useEffect(() => {
    const setHeaderH = () => {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty(
          "--header-h",
          `${header.getBoundingClientRect().height}px`,
        );
      }
    };
    setHeaderH();
    window.addEventListener("resize", setHeaderH);
    return () => window.removeEventListener("resize", setHeaderH);
  }, []);

  return (
    <div>
      <section
        className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
        style={{
          marginTop: "calc(-1 * var(--header-h, 139px))",
          backgroundImage: `url(${Fachada})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-foreground/65" />
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h1 className="text-4xl font-bold text-background sm:text-5xl">
            Cardápio completo para qualquer hora do dia.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/85">
            Três unidades em Ribeirão Preto com cafeteria, almoço, encomendas para festas e cestas
            personalizadas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/60 px-6 py-3 text-sm font-bold text-background"
              aria-label="Instagram @bellacittarp"
            >
              <Instagram size={18} /> @bellacittarp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">O que oferecemos</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {SERVICOS.map((s) => (
            <article key={s.titulo} className="flex flex-col p-6 surface-card">
              <s.icon className="text-primary" size={26} />
              <h3 className="mt-4 text-lg font-bold">{s.titulo}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Nossas unidades</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {UNIDADES.map((u) => (
              <article key={u.nome} className="flex flex-col p-6 surface-card">
                <h3 className="text-lg font-bold">{u.nome}</h3>
                <p className="mt-2 flex-1 inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {u.endereco}
                </p>
                <Link
                  to={u.to}
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs font-bold text-primary"
                >
                  Ver cardápio da unidade
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="p-6 surface-card">
            <ShoppingBasket className="text-primary" size={26} />
            <h2 className="mt-3 text-xl font-bold">Contato rápido</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cada unidade tem seu próprio WhatsApp. Fale direto com a filial de sua preferência.
            </p>
            <div className="mt-4 grid gap-2">
              {UNIDADES.map((u) => (
                <a
                  key={u.nome}
                  href={`https://wa.me/${u.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-2">
                    <WhatsAppIcon size={18} /> {u.nome}
                  </span>
                </a>
              ))}
            </div>
          </article>
          <article className="p-6 surface-card">
            <h2 className="text-xl font-bold">Como funciona o pedido</h2>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1. Escolha a unidade e navegue pelo cardápio, encomendas e cestas.</li>
              <li>2. Adicione os itens ao carrinho e ajuste as quantidades.</li>
              <li>3. Envie o resumo pelo WhatsApp da própria filial para confirmar.</li>
            </ol>
            <p className="mt-4 rounded-xl border border-accent/50 bg-accent/15 p-3 text-sm">
              Nenhum pagamento é feito no site: o fechamento e a confirmação do pedido acontecem
              exclusivamente pelo WhatsApp.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
