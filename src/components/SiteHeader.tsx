import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ShoppingBag, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";
import { INSTAGRAM, FACEBOOK } from "@/data/menu";

const TABS = [
  { to: "/", label: "Início" },
  { to: "/filial-guapore", label: "Filial Guaporé" },
  { to: "/filial-vila-seixas", label: "Filial Vila Seixas" },
  { to: "/filial-portugal", label: "Filial Portugal" },
] as const;

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const pathname = useLocation({ select: (l) => l.pathname });
  const isHome = pathname === "/";

  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    const update = () =>
      setSolid(window.scrollY > window.innerHeight - 200);

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  // Cores dos elementos conforme o cabeçalho está sobre o hero
  // (transparente) ou sólido
  const iconBtn = solid
    ? "grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
    : "grid h-10 w-10 place-items-center rounded-full border border-background/50 text-background transition-colors hover:bg-background/10";

  const navBase =
    "inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition-colors";

  const navIdle = solid
    ? `${navBase} border-border text-muted-foreground hover:bg-secondary`
    : `${navBase} border-background/40 text-background/90 hover:bg-background/10`;

  const navActive = solid
    ? `${navBase} border-transparent bg-primary text-primary-foreground`
    : `${navBase} border-transparent bg-background text-foreground`;

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
        solid
          ? "border-b border-border bg-background/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={logo}
            alt="Bella Citta"
            className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @bellacittarp"
            className={iconBtn}
          >
            <Instagram size={18} />
          </a>

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Bella Citta"
            className={iconBtn}
          >
            <Facebook size={18} />
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir carrinho"
            className="relative grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingBag size={18} />

            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navegação horizontal sem indicador de scroll */}
      <nav className="scrollbar-hide mx-auto max-w-6xl overflow-x-auto px-4 pb-3">
        <ul className="flex gap-2 whitespace-nowrap">
          {TABS.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                className={isActive(t.to) ? navActive : navIdle}
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 2C6.5 2 2 6.5 2 12.05c0 1.77.46 3.5 1.34 5.02L2 22l5.06-1.32a10 10 0 0 0 4.99 1.32h.01c5.55 0 10.05-4.5 10.05-10.05C22.1 6.5 17.6 2 12.05 2zm0 18.24c-1.58 0-3.13-.42-4.48-1.22l-.32-.19-3 .78.8-2.93-.21-.33a8.19 8.19 0 0 1-1.26-4.35c0-4.53 3.69-8.21 8.22-8.21 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.81c0 4.53-3.69 8.23-8.22 8.23z" />
    </svg>
  );
}