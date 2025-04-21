import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Corrigido aqui!
});

export const metadata: Metadata = {
  title: "TaskMatch",
  description: "O TaskMatch é uma plataforma web inovadora para organização, gamificação e colaboração em tarefas em dupla",
};

// No seu <html> ou <body> (em layout.tsx), adicione as classes:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${firaMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}