import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prospecta Aqui | Encontre empresas para prospectar",
  description:
    "Encontre empresas por segmento e cidade em poucos segundos. Tenha nome, telefone, site e endereço organizados para começar sua prospecção.",
  keywords: [
    "prospecção de clientes",
    "prospecção B2B",
    "encontrar empresas",
    "encontrar empresas por cidade",
    "buscar empresas",
    "lista de empresas",
    "prospecção comercial",
    "prospecção de vendas",
    "geração de leads",
    "leads B2B",
  ],
  applicationName: "Prospecta Aqui",
  authors: [{ name: "Prospecta Aqui" }],
  creator: "Prospecta Aqui",
  publisher: "Prospecta Aqui",
  category: "Business",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Prospecta Aqui",
    title: "Prospecta Aqui | Encontre empresas para prospectar",
    description:
      "Escolha um segmento e uma cidade. Encontre empresas e tenha nome, telefone, site e endereço para começar sua prospecção.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospecta Aqui | Encontre empresas para prospectar",
    description:
      "Encontre empresas por segmento e cidade e tenha os dados necessários para começar sua prospecção.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
