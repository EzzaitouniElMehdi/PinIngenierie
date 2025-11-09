"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds and only if not dismissed before
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("leadPopupDismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("leadPopupDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <FaTimes className="text-xl" />
        </button>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Recevez une estimation gratuite en 24h
          </h3>
          <p className="text-gray-600 mb-6">
            Obtenez un devis personnalisé pour votre projet de génie civil dès aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={handleClose}
              className="btn-primary flex-1 text-center"
            >
              Demander un devis
            </Link>
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

