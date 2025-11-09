import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "Entrepreneur",
    content:
      "Un service professionnel et des délais respectés. Leur expertise nous a permis de finaliser notre projet dans les temps.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "Architecte",
    content:
      "Collaboration excellente. Les plans et calculs fournis sont d&apos;une grande précision. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Mohamed Amrani",
    role: "Particulier",
    content:
      "Accompagnement de qualité pour notre projet de maison. Équipe réactive et à l&apos;écoute. Très satisfait.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <FaQuoteLeft className="text-primary-600 text-2xl mb-4" />
              <p className="text-gray-700 mb-4 italic">{testimonial.content}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

