import { FaFileAlt, FaCheckCircle, FaHandshake } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaFileAlt,
    title: "Étude",
    description: "Analyse de votre projet et élaboration des solutions techniques adaptées.",
  },
  {
    number: "02",
    icon: FaCheckCircle,
    title: "Validation",
    description: "Révision et validation des études avec vous avant la finalisation.",
  },
  {
    number: "03",
    icon: FaHandshake,
    title: "Livraison",
    description: "Remise des documents finaux : plans, notes de calcul et rapports.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Process de Travail
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus clair et efficace en 3 étapes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary-200 transform translate-x-4 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
                <div className="relative bg-white p-8 rounded-xl shadow-lg border-2 border-primary-100 text-center">
                  <div className="bg-primary-600 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

