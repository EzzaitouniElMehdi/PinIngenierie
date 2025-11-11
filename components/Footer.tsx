import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo/pin-logo.png"
                  alt="PIN Ingénierie logo"
                  width={80}
                  height={80}
                  className="h-12 w-auto"
                />
                <span className="font-extrabold text-white text-xl tracking-tight select-none">
                  <span className="text-white">P</span>
                  <span className="text-primary-500">in Ingénierie</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Expertise en génie civil pour vos projets de construction au Maroc.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary-400 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-400 transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-primary-400 transition-colors">
                    Études de structures
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-400 transition-colors">
                    Plans d exécution
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-400 transition-colors">
                    Études VRD
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-400 transition-colors">
                    Diagnostic technique
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-primary-400" />
                  <span>+212 6 61 41 91 15</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-primary-400" />
                  <span>pin22.maroc@gmail.com</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-4 btn-primary text-sm px-4 py-2 inline-block"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Bureau d Étude en Génie Civil. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

