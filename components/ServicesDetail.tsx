import Link from "next/link";
import Image from "next/image";
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
    title: "Études de Structures Béton/Acier",
    description:
      "Nous réalisons des études complètes de structures en béton armé et en acier. Nos calculs incluent la vérification de la résistance, de la stabilité et de la durabilité selon les normes marocaines (CM66, BAEL) et internationales (Eurocodes).",
    features: [
      "Calculs de structures béton armé",
      "Calculs de structures métalliques",
      "Vérification de la stabilité",
      "Notes de calcul détaillées",
    ],
    image: {
      src: "/services/structure.png",
      alt: "Études de structures béton et acier réalisées par PIN Ingénierie",
    },
  },
  {
    icon: FaCalculator,
    title: "Calculs et Notes de Calcul",
    description:
      "Élaboration de notes de calcul complètes et détaillées pour tous vos projets. Nos documents sont conformes aux exigences des autorités et des organismes de contrôle.",
    features: [
      "Notes de calcul structurées",
      "Conformité aux normes",
      "Documentation technique complète",
      "Vérification par des experts",
    ],
    image: {
      src: "/services/calculs.png",
      alt: "Calculs et notes de calcul détaillées pour vos projets",
    },
  },
  {
    icon: FaDraftingCompass,
    title: "Plans Architecture & Plans Exécution",
    description:
      "Réalisation de plans techniques précis pour la construction : plans d'architecture, plans d'exécution, détails constructifs. Tous nos plans sont réalisés avec les logiciels professionnels (AutoCAD, Revit).",
    features: [
      "Plans Architecture",
      "Plans Exécution",
      "Détails Constructifs",
      "Modélisation 2D/3D",
    ],
    image: {
      src: "/services/plans.png",
      alt: "Plans d'architecture et d'exécution précis par PIN Ingénierie",
    },
  },
  {
    icon: FaRoad,
    title: "Études VRD",
    description:
      "Études complètes de Voirie et Réseaux Divers : conception de réseaux d'assainissement, d&apos;eau potable, d&apos;électricité, et de voirie pour vos projets.",
    features: [
      "Réseaux d&apos;assainissement",
      "Réseaux d'eau potable",
      "Réseaux électriques",
      "Conception de voirie",
    ],
    image: {
      src: "/services/vdr.png",
      alt: "Études VRD pour réseaux et voirie",
    },
  },
  {
    icon: FaSearch,
    title: "Diagnostic Technique & Expertise",
    description:
      "Diagnostic de structures existantes, expertise technique, évaluation de la sécurité et propositions de renforcement ou de réhabilitation.",
    features: [
      "Diagnostic de structures",
      "Expertise technique",
      "Évaluation de sécurité",
      "Propositions de renforcement",
    ],
    image: {
      src: "/services/diagnostic.png",
      alt: "Diagnostic technique et expertise structurale",
    },
  },
  {
    icon: FaCube,
    title: "Modélisation 2D/3D",
    description:
      "Modélisation et visualisation de vos projets en 2D et 3D pour une meilleure compréhension et communication. Utilisation des logiciels les plus performants du marché.",
    features: [
      "Modélisation 3D",
      "Rendu photoréaliste",
      "Visualisation interactive",
      "Maquettes numériques",
    ],
    image: {
      src: "/services/modelisation.png",
      alt: "Modélisation 3D et visualisation pour projets de construction",
    },
  },
];

export default function ServicesDetail() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-primary-100 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary-600 text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary inline-block">
                    Demander un devis
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg bg-gray-100"
                    priority={index === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

