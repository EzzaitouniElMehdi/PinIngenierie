import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "PIN Ingénierie — Bureau d'Étude en Génie Civil Maroc",
  description: "Bureau d'étude en génie civil au Maroc. Études de structures, calculs, plans d'architecture et d'exécution, VRD. Expertise technique pour vos projets de construction.",
  keywords: "bureau d'étude en génie civil Maroc, étude de structure Maroc, ingénierie bâtiment, plans architecture et structure, bureau ingénierie Casablanca, calculs structure, VRD Maroc",
  authors: [{ name: "Bureau d'Étude en Génie Civil" }],
  openGraph: {
    title: "PIN Ingénierie — Bureau d'Étude en Génie Civil",
    description: "Expertise en génie civil pour vos projets de construction au Maroc.",
    type: "website",
    locale: "fr_FR",
    images: ["/logo/pin-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PIN Ingénierie",
              "description": "Bureau d'étude spécialisé en génie civil, études de structures, calculs et plans d'exécution au Maroc",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressLocality": "Berrechid",
                "addressRegion": "Casablanca-Settat",
                "postalCode": "24200",
                "streetAddress": "Lot 341, Lotissement Nasrallah",
              },
              "telephone": "+212-6-61-41-91-15",
              "url": "https://www.pin-ingenierie.com",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "Maroc",
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />
      </body>
    </html>
  );
}

