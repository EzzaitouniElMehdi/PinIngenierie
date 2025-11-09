import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bureau d'Étude en Génie Civil Maroc | Études Techniques & Calculs",
  description: "Bureau d'étude en génie civil au Maroc. Études de structures, calculs, plans d'architecture et d'exécution, VRD. Expertise technique pour vos projets de construction.",
  keywords: "bureau d'étude en génie civil Maroc, étude de structure Maroc, ingénierie bâtiment, plans architecture et structure, bureau ingénierie Casablanca, calculs structure, VRD Maroc",
  authors: [{ name: "Bureau d'Étude en Génie Civil" }],
  openGraph: {
    title: "Bureau d'Étude en Génie Civil Maroc | Études Techniques & Calculs",
    description: "Expertise en génie civil pour vos projets de construction au Maroc",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bureau d'Étude en Génie Civil",
              "description": "Bureau d'étude spécialisé en génie civil, études de structures, calculs et plans d'exécution au Maroc",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressLocality": "Casablanca",
              },
              "telephone": "+212-XXX-XXXXXX",
              "url": "https://www.votre-site.com",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "Maroc",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />
      </body>
    </html>
  );
}

