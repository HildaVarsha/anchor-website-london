import type { Metadata } from "next";
import "./globals.css";
import { BottomNavbar, TopNavbar } from "@/components/shared";
import { Toaster } from "@/components/ui";

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
      <body className="">
        <TopNavbar />
        <div className="min-h-screen w-full pt-16 pb-20 md:pb-0">
          {children}
          <Toaster />
        </div>
        <div className="md:hidden fixed bottom-0 w-full">
          <BottomNavbar />
        </div>
      </body>
    </html>
  );
}
