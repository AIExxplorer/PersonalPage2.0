import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/images/favicon.ico" />
        <title>PersonalPage 2.0</title>
      </head>
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 bg-gray-900 text-white min-h-screen">{children}</main>
      </body>
    </html>
  );
}
