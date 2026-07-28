import type { Metadata } from "next";
import "./globals.css";

/**
 * Base para resolver os URLs absolutos das imagens (Open Graph, Twitter).
 * A Vercel injeta VERCEL_PROJECT_PRODUCTION_URL sozinha — não é nada que
 * configures. Quando fechares o domínio, substitui isto por uma linha fixa:
 *   const siteUrl = "https://o-teu-dominio.pt";
 */
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diogo — Programador & Treinador",
  description:
    "Há 12 anos que construo software. Os projetos de que mais me orgulho nasceram de problemas que vivo todas as semanas.",
  openGraph: {
    title: "Diogo — Programador & Treinador",
    description:
      "Seis projetos, seis posições. Plataformas, produtos e sites construídos de raiz.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter+Tight:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
