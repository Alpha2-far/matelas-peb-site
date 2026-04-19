import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "./json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matelas PEB | Matelas Premium au Bénin - Livraison Gratuite",
    template: "%s | Matelas PEB",
  },
  description: "Matelas PEB - Vente de matelas premium au Bénin. Qualité supérieure, prix compétitifs, livraison gratuite à Cotonou, Porto-Novo et partout au Bénin. ☎️ Contactez-nous maintenant !",
  keywords: [
    "matelas Bénin",
    "matelas Cotonou",
    "matelas Porto-Novo",
    "matelas premium",
    "lit Bénin",
    "meuble chambre Bénin",
    "matelas mémoire de forme",
    "matelas ressorts",
    "sommier Bénin",
    "oreiller Bénin",
  ],
  authors: [{ name: "Matelas PEB" }],
  creator: "Matelas PEB",
  publisher: "Matelas PEB",
  metadataBase: new URL("https://matelaspeb.bj"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://matelaspeb.bj",
    siteName: "Matelas PEB",
    title: "Matelas PEB | Matelas Premium au Bénin - Livraison Gratuite",
    description: "Matelas PEB - Vente de matelas premium au Bénin. Qualité supérieure, prix compétitifs, livraison gratuite.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matelas PEB - Matelas Premium au Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matelas PEB | Matelas Premium au Bénin",
    description: "Matelas PEB - Vente de matelas premium au Bénin. Qualité supérieure, livraison gratuite.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">
        <JsonLd />
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
