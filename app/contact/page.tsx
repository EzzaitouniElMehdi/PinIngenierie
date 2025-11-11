import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contactez-nous | Bureau d'Étude en Génie Civil",
  description: "Contactez notre bureau d'étude pour un devis gratuit. Réponse sous 24h pour vos projets de génie civil.",
  keywords: "contact bureau d'étude, devis gratuit génie civil, demande de devis",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recevez un devis gratuit en 24h pour votre projet
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Lot 341, Lotissement Nasrallah - Berrechid
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      +212 6 61 41 91 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      pin22.maroc@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Horaires d ouverture</h3>
                <p className="text-gray-600 mb-1">Lundi - Vendredi: 9h00 - 18h00</p>
                <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          {/* Map replaced with neutral SVG placeholder for privacy and performance */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone d intervention</h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center p-4">
              <svg viewBox="0 0 400 240" role="img" aria-label="Carte illustrative simplifiée" className="w-full h-full">
                <rect width="400" height="240" rx="12" fill="#f3f4f6" />
                <circle cx="120" cy="120" r="70" fill="#e5e7eb" />
                <circle cx="280" cy="120" r="70" fill="#e5e7eb" />
                <circle cx="200" cy="120" r="70" fill="#d1d5db" />
                <path d="M200 60 L210 110 L260 120 L210 130 L200 180 L190 130 L140 120 L190 110 Z" fill="#E53935" opacity="0.8" />
                <text x="200" y="225" textAnchor="middle" fontSize="14" fill="#6b7280">Illustration - PIN Ingénierie</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

