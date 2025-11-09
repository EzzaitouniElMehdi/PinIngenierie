import type { Metadata } from "next";
import ServicesDetail from "@/components/ServicesDetail";

export const metadata: Metadata = {
  title: "Nos Services | Bureau d'Étude en Génie Civil",
  description: "Découvrez nos services en génie civil : études de structures, calculs, plans d'architecture, VRD, diagnostic technique et modélisation 2D/3D.",
  keywords: "services génie civil, études structures, plans architecture, VRD, diagnostic technique, modélisation 3D",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services en génie civil pour accompagner vos projets de construction
            </p>
          </div>
        </div>
      </div>
      <ServicesDetail />
    </div>
  );
}

