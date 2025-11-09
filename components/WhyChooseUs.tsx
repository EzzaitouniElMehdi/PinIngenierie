import {
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Fiabilité",
    description: "Des solutions éprouvées et conformes aux normes en vigueur.",
  },
  {
    icon: FaClock,
    title: "Rapidité",
    description: "Délais respectés et réactivité pour vos projets urgents.",
  },
  {
    icon: FaGraduationCap,
    title: "Expertise",
    description: "Une équipe d&apos;ingénieurs expérimentés à votre service.",
  },
  {
    icon: FaCheckCircle,
    title: "Conformité",
    description: "Respect strict des normes marocaines et internationales.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des avantages qui font la différence pour vos projets
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

