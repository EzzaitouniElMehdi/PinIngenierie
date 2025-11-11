"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "212661419115"; // Replace with your WhatsApp number
  const message = "Bonjour, je souhaite obtenir un devis gratuit pour mon projet.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
        !
      </span>
    </button>
  );
}

