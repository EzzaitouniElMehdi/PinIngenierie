import Link from "next/link";
import {
  FaBuilding,
  FaCalculator,
  FaDraftingCompass,
  FaRoad,
  FaSearch,
  FaCube,
} from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Études de Structures",
    description: "Béton armé, structures métalliques, calculs de résistance et stabilité.",
  },
  {
    icon: FaCalculator,
    title: "Calculs & Notes de Calcul",
    description: "Notes de calcul détaillées conformes aux normes marocaines et internationales.",
  },
  {
    icon: FaDraftingCompass,
    title: "Plans d&apos;Architecture & Exécution",
    description: "Plans techniques précis pour la réalisation de vos projets.",
  },
  {
    icon: FaRoad,
    title: "Études VRD",
    description: "Voirie, réseaux divers : assainissement, eau potable, électricité.",
  },
  {
    icon: FaSearch,
    title: "Diagnostic Technique",
    description: "Expertise et diagnostic de structures existantes.",
  },
  {
    icon: FaCube,
    title: "Modélisation 2D/3D",
    description: "Modélisation et visualisation de vos projets en 2D et 3D.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Principaux
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise complète pour tous vos besoins en génie civil
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  En savoir plus →
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}

