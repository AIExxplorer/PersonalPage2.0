import "./globals.css";
import { SidebarProvider } from "@/components/common/ui/sidebar";
import { Sidebar } from "@/components/common/ui/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/images/favicon.ico" />
        <title>PersonalPage 2.0</title>
      </head>
      <body className="flex bg-gray-900 text-white">
        <SidebarProvider>
          {/* Sidebar */}
          <Sidebar side="left" />
        </SidebarProvider>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
