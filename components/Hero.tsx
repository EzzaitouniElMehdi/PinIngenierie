import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white pt-20 pb-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bureau d&apos;Étude en Génie Civil
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-100">
            Études Techniques, Calculs & Suivi de Projets
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-200 max-w-2xl mx-auto">
            Nous accompagnons vos projets de construction avec expertise, précision et sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 flex items-center gap-2">
              Demander un devis gratuit
              <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

