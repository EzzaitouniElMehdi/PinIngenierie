import { FaAward, FaUsers, FaTools, FaCheckCircle } from "react-icons/fa";

const values = [
  {
    icon: FaAward,
    title: "Excellence",
    description: "Nous visons l&apos;excellence dans chaque projet que nous réalisons.",
  },
  {
    icon: FaUsers,
    title: "Proximité",
    description: "Un accompagnement personnalisé et une communication transparente.",
  },
  {
    icon: FaTools,
    title: "Innovation",
    description: "Utilisation des dernières technologies et méthodes de travail.",
  },
  {
    icon: FaCheckCircle,
    title: "Fiabilité",
    description: "Respect des délais et engagement sur la qualité des livrables.",
  },
];

const tools = [
  "AutoCAD",
  "Revit",
  "Robot Structural Analysis",
  "ETABS",
  "SAP2000",
  "Tekla Structures",
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de Nous
            </h1>
            <p className="text-xl text-gray-600">
              Votre partenaire de confiance en génie civil au Maroc
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Accompagner nos clients dans la réalisation de leurs projets de construction en leur fournissant des études techniques de qualité, conformes aux normes en vigueur.
              </p>
              <p className="text-gray-600">
                Nous nous engageons à respecter les délais, à maintenir une communication transparente et à offrir des solutions adaptées à chaque projet.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Notre Vision
              </h2>
              <p className="text-gray-600 mb-4">
                Devenir la référence en matière de bureau d'étude en génie civil au Maroc, reconnu pour notre expertise technique et notre engagement envers l&apos;excellence.
              </p>
              <p className="text-gray-600">
                Nous aspirons à contribuer au développement du secteur de la construction au Maroc en proposant des solutions innovantes et durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Tools */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Expérience
              </h2>
              <p className="text-gray-600 mb-4">
                Forts de plusieurs années d'expérience dans le domaine du génie civil, nous avons accompagné de nombreux projets de différentes envergures : maisons individuelles, immeubles résidentiels, bâtiments commerciaux et industriels.
              </p>
              <p className="text-gray-600 mb-4">
                Notre équipe est composée d'ingénieurs diplômés et certifiés, spécialisés dans différents domaines du génie civil. Nous restons constamment à jour avec les dernières normes et réglementations.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Certifications & Normes
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Conformité aux normes marocaines (CM66, BAEL)</li>
                  <li>• Conformité aux Eurocodes</li>
                  <li>• Certifications professionnelles</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Outils & Logiciels
              </h2>
              <p className="text-gray-600 mb-6">
                Nous utilisons les logiciels les plus performants du marché pour garantir la précision et la qualité de nos études :
              </p>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (photos removed, replaced with SVG initials avatars) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Une équipe d&apos;experts à votre service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{name: "Ingénieur 1", initials: "I1"}, {name: "Ingénieur 2", initials: "I2"}, {name: "Ingénieur 3", initials: "I3"}].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-100 h-64 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" role="img" aria-label={`Avatar ${member.name}`} className="w-32 h-32">
                    <circle cx="60" cy="60" r="58" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" />
                    <circle cx="60" cy="46" r="18" fill="#d1d5db" />
                    <rect x="22" y="70" width="76" height="36" rx="18" fill="#d1d5db" />
                    <text x="60" y="113" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111111">{member.initials}</text>
                  </svg>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">Spécialiste en génie civil</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

