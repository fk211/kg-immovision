// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); // Direkt als --font-sans setzen
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "KG Immovision AG - Exklusivität. Vision. Vertrauen.",
  description: "Ihr spezialisierter Partner für den Ankauf, Verkauf, die Vermietung und die Projektierung von hochwertigen Immobilien. Über 15 Jahre Erfahrung im Premium-Immobilienmarkt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        lora.variable
      )}>
        {children}
      </body>
    </html>
  );
}
