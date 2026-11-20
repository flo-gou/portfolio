import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";
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

const description =
  "Senior product manager, 7 ans en B2B et SaaS : espace client à 40 000 utilisateurs actifs, canaux conversationnels, plateformes en marque blanche. À côté, deux apps mobiles menées jusqu'à l'App Store — Briquera et Bandee.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Florian Gouesse — Senior Product Manager",
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Florian Gouesse",
    "senior product manager",
    "product manager B2B",
    "product manager SaaS",
    "product discovery",
    "portfolio",
    "Briquera",
    "Bandee",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Florian Gouesse — Senior Product Manager",
    description:
      "Cadrer, arbitrer, livrer. Sept ans de plateformes B2B, deux apps mobiles menées jusqu'à l'App Store.",
    type: "profile",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Florian Gouesse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Gouesse — Senior Product Manager",
    description: "Cadrer, arbitrer, livrer. Briquera & Bandee, menées jusqu'à l'App Store.",
  },
};

/** JSON-LD — ce qui permet à Google de relier le site au nom et au profil. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressRegion: profile.location, addressCountry: "FR" },
  sameAs: [profile.contacts.linkedin, profile.contacts.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
