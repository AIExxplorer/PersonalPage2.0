"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  // Função para criar links com o idioma selecionado
  const createLocaleLink = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // Verifica se o primeiro segmento é um idioma válido
    const locales = ["en", "pt", "es", "fr"];
    if (locales.includes(segments[0])) {
      segments[0] = locale; // Substitui o idioma no início da URL
    } else {
      segments.unshift(locale); // Adiciona o idioma no início da URL
    }
    return `/${segments.join("/")}`;
  };

  return (
    <div className="flex gap-4">
      <Link href={createLocaleLink("en")}>
        <img src="/assets/images/us-flag.svg" alt="English" className="w-6 h-4" />
      </Link>
      <Link href={createLocaleLink("pt")}>
        <img src="/assets/images/br-flag.svg" alt="Português" className="w-6 h-4" />
      </Link>
      <Link href={createLocaleLink("es")}>
        <img src="/assets/images/es-flag.svg" alt="Español" className="w-6 h-4" />
      </Link>
      <Link href={createLocaleLink("fr")}>
        <img src="/assets/images/fr-flag.svg" alt="Français" className="w-6 h-4" />
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
