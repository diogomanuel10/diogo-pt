import type { Metadata } from "next";
import { Syne, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

/**
 * Fontes servidas por next/font: auto-hospedadas, sem <link> bloqueante e sem
 * layout shift. Cada uma expõe uma custom property que os tokens de
 * globals.css consomem (--font-display, --font-body, --font-mono).
 */
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Diogo — Programador & Aventureiro";
const description =
  "Há 12 anos que construo software. Um passeio por seis projetos que nasceram de problemas reais — cada um com o seu avistamento.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Diogo" }],
  keywords: [
    "programador",
    "desenvolvimento de software",
    "Next.js",
    "TypeScript",
    "treinador de voleibol",
    "Portugal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description:
      "Uma montanha-russa por um safari de seis projetos. Plataformas, produtos e sites construídos de raiz.",
    url: siteUrl,
    siteName: title,
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

/** Structured data: um site pessoal ganha resultados ricos com Person. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diogo",
  jobTitle: "Programador",
  description,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Senhora da Hora",
    addressCountry: "PT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className={`${syne.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
