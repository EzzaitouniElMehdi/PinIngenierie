import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Recevez un devis gratuit en 24h et découvrez comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
              <FaArrowRight />
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

