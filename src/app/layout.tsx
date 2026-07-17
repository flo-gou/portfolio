import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
  Outfit,
  Archivo,
  Caveat,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://florian-gouesse.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Florian Gouesse — Designer produit & créateur d'apps",
  description:
    "Designer produit indépendant. Je conçois, designe et publie des applications mobiles entières en solo — de l'idée au store. Études de cas : Briquera et Bandee.",
  keywords: [
    "Florian Gouesse",
    "designer produit",
    "product designer",
    "portfolio",
    "Briquera",
    "Bandee",
    "React Native",
    "Expo",
    "UX UI",
  ],
  authors: [{ name: "Florian Gouesse" }],
  openGraph: {
    title: "Florian Gouesse — Designer produit & créateur d'apps",
    description:
      "Je conçois et j'expédie des applications mobiles entières, en solo. Deux produits, deux mondes : Briquera & Bandee.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Gouesse — Designer produit",
    description:
      "Je conçois et j'expédie des applications mobiles entières, en solo. Briquera & Bandee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} ${outfit.variable} ${archivo.variable} ${caveat.variable} antialiased`}
    >
      <body>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
