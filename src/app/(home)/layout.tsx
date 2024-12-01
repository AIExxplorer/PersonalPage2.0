import "src/app/(home)/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Personal Page",
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}