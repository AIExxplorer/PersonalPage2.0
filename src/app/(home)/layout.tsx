import "../(home)/globals.css"; // Ajuste conforme necessário
import { ReactNode } from "react";

export const metadata = {
  title: "Next.js",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
