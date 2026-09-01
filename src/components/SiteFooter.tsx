import { Instagram, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { FILIAIS, INSTAGRAM, FACEBOOK } from "@/data/menu";

export function SiteFooter() {
  const mapas: Record<string, string> = {
    "Filial Guaporé": "https://maps.app.goo.gl/68B7RHE8iWFj5Zp77",
    "Filial Portugal": "https://maps.app.goo.gl/zVu8fv48ws8LgFXv7",
    "Filial Vila Seixas": "https://maps.app.goo.gl/uiHC6GJsB1uUE4W39",
  };

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[auto_1fr_auto]">
        <img src={logo} alt="Bella Citta" className="h-20 w-20" />

        <ul className="space-y-2 text-sm text-muted-foreground">
          {Object.values(FILIAIS).map((f) => (
            <li key={f.nome} className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />

              <span>
                <strong className="text-foreground">{f.nome}:</strong>{" "}
                <a
                  href={mapas[f.nome]}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  {f.endereco}
                </a>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex h-fit gap-3">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @bellacittarp"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Instagram size={20} />
          </a>

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Bella Citta"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      <p className="px-4 pb-8 text-center text-xs text-muted-foreground">
        Cardápio digital informativo — pedidos confirmados exclusivamente pelo WhatsApp.
      </p>
    </footer>
  );
}
