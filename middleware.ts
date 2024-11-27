import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/; // Arquivos públicos, como imagens e estilos
const SUPPORTED_LOCALES = ["us", "pt", "es", "fr"]; // Idiomas suportados

export function middleware(req: NextRequest) {
  const { nextUrl } = req;

  // Ignora arquivos públicos
  if (PUBLIC_FILE.test(nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Obtém o pathname da URL
  const segments = nextUrl.pathname.split("/").filter(Boolean);

  // Se a URL começar com um idioma suportado, prossiga normalmente
  if (SUPPORTED_LOCALES.includes(segments[0])) {
    return NextResponse.next();
  }

  // Se a URL não tiver idioma, deixe como está (não force nenhum redirecionamento)
  return NextResponse.next();
}
