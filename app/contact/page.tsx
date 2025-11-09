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
                      Casablanca, Maroc
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
                      +212 XXX XXX XXX
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
                      contact@bureau-etude.ma
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Horaires d'ouverture</h3>
                <p className="text-gray-600 mb-1">Lundi - Vendredi: 9h00 - 18h00</p>
                <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre localisation</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Carte Google Maps - À intégrer avec votre clé API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

