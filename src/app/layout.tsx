import type { Metadata } from "next";
import { Ester } from "@/components/esteregg/ester";

export const metadata: Metadata = {
  title: "Portfolio di Andrea De Laurentis",
  description: "Portfolio di Andrea De Laurentis",
};

import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body className="min-h-screen relative">
        <div id="app" className="relative z-10">
          {children}
        </div>
        <Ester />
      </body>
    </html>
  );
}
