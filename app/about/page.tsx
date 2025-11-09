import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "À Propos | Bureau d'Étude en Génie Civil",
  description: "Découvrez notre bureau d'étude en génie civil : mission, vision, expérience et engagements qualité pour vos projets de construction.",
  keywords: "bureau d'étude génie civil, équipe ingénierie, certifications, expertise technique",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
    </div>
  );
}

