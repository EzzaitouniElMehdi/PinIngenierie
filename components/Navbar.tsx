"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/pin-logo.png"
              alt="PIN Ingénierie logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
            <span className="font-extrabold text-xl tracking-tight select-none">
              <span className="text-secondary-900">P</span>
              <span className="text-primary-600">in Ingénierie</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium ${
                    isActive(link.href)
                      ? "text-primary-600"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm px-4 py-2 inline-block"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

