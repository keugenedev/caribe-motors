import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VehicleDetailHero from "@/components/VehicleDetailHero";
import VehicleSpecifications, { type VehicleSpecification } from "@/components/VehicleSpecifications";
import WordReveal from "@/components/WordReveal";

type Model = {
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: VehicleSpecification[];
};

const models: Record<string, Model> = {
  compass: {
    name: "Compass",
    category: "SUV compact 4x4",
    image: "/images/vehicles/Compass.png",
    description: "Un SUV Jeep compact qui associe confort quotidien, technologies modernes et capacites 4x4 pour partir explorer en toute confiance.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" },
      { icon: "gauge", label: "Puissance maximale", value: "200 hp" },
      { icon: "settings", label: "Couple maximal", value: "300 N.m" },
      { icon: "settings", label: "Transmission", value: "8AT · 4x4" },
      { icon: "ruler", label: "Longueur", value: "4 404 mm" },
      { icon: "ruler", label: "Empattement", value: "2 636 mm" },
    ],
  },
  gladiator: {
    name: "Gladiator",
    category: "Pick-up 4x4",
    image: "/images/vehicles/Gladiator.png",
    description: "La liberte d'un Jeep et la polyvalence d'un pick-up : le Gladiator est pret pour le travail, les loisirs et les terrains difficiles.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "3.6L Pentastar V6" },
      { icon: "gauge", label: "Puissance maximale", value: "285 hp" },
      { icon: "settings", label: "Couple maximal", value: "353 N.m" },
      { icon: "settings", label: "Transmission", value: "8AT · 4x4" },
      { icon: "ruler", label: "Longueur", value: "5 537 mm" },
      { icon: "ruler", label: "Empattement", value: "3 487 mm" },
    ],
  },
  "grand-cherokee": {
    name: "Grand Cherokee",
    category: "SUV premium 4x4",
    image: "/images/vehicles/GrandCheerokee.png",
    description: "Le Grand Cherokee combine une presence premium, un confort familial et les capacites Jeep pour les longs trajets comme les aventures hors route.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "2.0L Hurricane 4 Turbo" },
      { icon: "gauge", label: "Puissance maximale", value: "324 hp" },
      { icon: "settings", label: "Couple maximal", value: "450 N.m" },
      { icon: "settings", label: "Transmission", value: "8AT · 4x4" },
      { icon: "ruler", label: "Longueur", value: "4 915 mm" },
      { icon: "ruler", label: "Empattement", value: "2 964 mm" },
    ],
  },
  wrangler: {
    name: "Wrangler",
    category: "4x4 iconique",
    image: "/images/vehicles/Wrangler.png",
    description: "L'icone Jeep concue pour sortir des sentiers battus, avec une motorisation turbo, une transmission automatique et une vraie capacite 4x4.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" },
      { icon: "gauge", label: "Puissance maximale", value: "270 hp" },
      { icon: "settings", label: "Couple maximal", value: "400 N.m" },
      { icon: "settings", label: "Transmission", value: "8AT · 4x4" },
      { icon: "ruler", label: "Longueur", value: "4 785 mm" },
      { icon: "ruler", label: "Empattement", value: "3 008 mm" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const car = models[(await params).model];
  return car ? { title: `Jeep ${car.name}`, description: `Decouvrez le Jeep ${car.name} chez Caribe Motors.` } : {};
}

export default async function JeepModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model];
  if (!car) notFound();

  return <div className="min-h-screen bg-white text-[#102a56]">
    <Navbar />
    <main>
      <Suspense fallback={null}>
        <VehicleDetailHero brand="Jeep" name={car.name} category={car.category} logo="/images/brands/Jeep.png" vehicle={car.image} description={car.description} brandFirst />
      </Suspense>
      <VehicleSpecifications brand={`Jeep ${car.name}`} specifications={car.specifications} />
      <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="Jeep chez Caribe Motors" delay={0.1} stagger={0.18} /></p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Pret pour votre prochaine aventure." delay={0.7} stagger={0.22} duration={0.7} /></h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre equipe pour connaitre la disponibilite, les equipements et planifier un essai." delay={1.8} stagger={0.075} duration={0.48} /></p>
          </div>
          <Reveal delay={3.1}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
