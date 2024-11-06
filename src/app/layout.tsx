import type { Metadata } from "next";

import "./globals.css";
import { TopNavbar } from "@/components/shared";

export const metadata: Metadata = {
  title: "Anchor Informatics Pvt Ltd",
  description: "Anchor Informatics Pvt Ltd, Global Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <TopNavbar />
        <div className="h-full w-full pt-16 overflow-auto">{children}</div>
      </body>
    </html>
  );
}
