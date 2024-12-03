import { SidebarProvider } from "@/hooks/use-sidebar";
import { AppSidebar } from "@/app/_components/AppSidebar"; // Caminho correto baseado na estrutura
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 p-8">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
