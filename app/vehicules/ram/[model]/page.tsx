import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VehicleDetailHero from "@/components/VehicleDetailHero";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecifications, { type VehicleSpecification } from "@/components/VehicleSpecifications";
import WordReveal from "@/components/WordReveal";

type Model = {
  name: string;
  category: string;
  image: string;
  description: string;
  gallery: string[];
  specifications: VehicleSpecification[];
};

const models: Record<string, Model> = {
  "ram-700": {
    name: "700 Laramie",
    category: "Pick-up compacte turbo",
    image: "/images/ram/700/ram-700-gris.png",
    description: "La RAM 700 Laramie associe une benne pratique, un moteur turbo efficient et le confort d'une cabine double pour le travail comme pour les trajets de tous les jours.",
    gallery: [
      "/images/ram/700/exterior-1.jpg",
      "/images/ram/700/exterior-2.jpg",
      "/images/ram/700/interior.jpg",
    ],
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "1.0L Turbo 3 cylindres" },
      { icon: "gauge", label: "Puissance maximale", value: "118 hp" },
      { icon: "settings", label: "Couple maximal", value: "200 N.m" },
      { icon: "settings", label: "Transmission", value: "CVT · 4x2 traction avant" },
      { icon: "ruler", label: "Longueur", value: "4 480 mm" },
      { icon: "ruler", label: "Charge utile", value: "650 kg" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const car = models[(await params).model];
  return car ? { title: `RAM ${car.name}`, description: `Decouvrez la RAM ${car.name} chez Caribe Motors.` } : {};
}

export default async function RamModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model];
  if (!car) notFound();

  return <div className="min-h-screen bg-white text-[#102a56]">
    <Navbar />
    <main>
      <Suspense fallback={null}>
        <VehicleDetailHero brand="RAM" name={car.name} category={car.category} logo="/images/brands/Ram.png" vehicle={car.image} description={car.description} brandFirst />
      </Suspense>
      <VehicleSpecifications brand={`RAM ${car.name}`} specifications={car.specifications} />
      <VehicleGallery brand="RAM" name={car.name} images={car.gallery} />
      <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="RAM chez Caribe Motors" delay={0.1} stagger={0.18} /></p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Pret pour prendre la route." delay={0.7} stagger={0.22} duration={0.7} /></h2>
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
