import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import GwmModelHero from "@/components/GwmModelHero";
import GwmPSeriesExperience from "@/components/GwmPSeriesExperience";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecifications, { type VehicleSpecification } from "@/components/VehicleSpecifications";
import WordReveal from "@/components/WordReveal";

const models = {
  "p-series": {
    name: "P-Series",
    category: "Pick-up 4x4",
    description: "Un pick-up GWM affirmé, prêt à associer la capacité de travail, le confort et l’aventure au quotidien.",
    image: "/images/gwm/nav/brown.png",
    gallery: ["/images/vehicle-details/gwm-p-series/exterior.jpg", "/images/vehicle-details/gwm-p-series/interior.jpg", "/images/vehicle-details/gwm-p-series/lifestyle.jpg"],
    specifications: [{ icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" }, { icon: "gauge", label: "Puissance maximale", value: "188 hp" }, { icon: "settings", label: "Couple maximal", value: "360 N·m" }, { icon: "settings", label: "Transmission", value: "ZF 8AT · 4WD" }, { icon: "ruler", label: "Longueur", value: "5 410 mm" }, { icon: "ruler", label: "Empattement", value: "3 230 mm" }] satisfies VehicleSpecification[],
  },
};

type ModelSlug = keyof typeof models;

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const car = models[(await params).model as ModelSlug];
  return car ? { title: `GWM ${car.name}`, description: `Découvrez le GWM ${car.name} chez Caribe Motors.` } : {};
}

export default async function GwmModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model as ModelSlug];
  if (!car) notFound();

  return (
    <div className="min-h-screen bg-white text-[#102a56]">
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <GwmModelHero name={car.name} category={car.category} description={car.description} image={car.image} />
          <GwmPSeriesExperience />
        </Suspense>
        <VehicleSpecifications brand={`GWM ${car.name}`} specifications={car.specifications} />
        <VehicleGallery brand="GWM" name={car.name} images={car.gallery} />
        <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="GWM chez Caribe Motors" delay={0.1} stagger={0.18} /></p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Prêt pour votre prochain défi." delay={0.75} stagger={0.22} duration={0.7} /></h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre équipe pour connaître la disponibilité et planifier un essai du GWM P-Series." delay={1.85} stagger={0.075} duration={0.48} /></p>
            </div>
            <Reveal delay={3.5} className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Demander un essai <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
