import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../app/footer/page"
 import Menu from "../app/menu/page";
export const metadata: Metadata = {
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
      
      <Menu />
        {children}

           <Footer />
      </body>
    </html>
  );
}
