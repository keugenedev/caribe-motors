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
  vehicle: string;
  description: string;
  gallery?: string[];
  specifications: VehicleSpecification[];
};

const models: Record<string, Model> = {
  vitara: {
    name: "Vitara",
    category: "SUV compact 4x4",
    vehicle: "/images/suzuki/vitara/vitara.png",
    description: "Un SUV Suzuki compact et affirme, concu pour combiner style, confort quotidien et liberte de conduite.",
    gallery: ["/images/suzuki/vitara/gallery-1.jpg", "/images/suzuki/vitara/gallery-2.jpg", "/images/suzuki/vitara/gallery-3.jpg"],
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "1.6L essence" },
      { icon: "gauge", label: "Puissance maximale", value: "118 hp" },
      { icon: "settings", label: "Couple maximal", value: "156 N·m" },
      { icon: "settings", label: "Transmission", value: "Automatique 6 rapports" },
      { icon: "ruler", label: "Longueur", value: "4 175 mm" },
      { icon: "ruler", label: "Empattement", value: "2 500 mm" },
    ],
  },
  ignis: {
    name: "Ignis",
    category: "SUV urbain compact",
    vehicle: "/images/vehicles/Ignis.png",
    description: "Un Suzuki ultra-compact au style affirmé, agile en ville et prêt pour les escapades du quotidien.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "1.2L DUALJET essence" },
      { icon: "gauge", label: "Puissance maximale", value: "83 hp" },
      { icon: "settings", label: "Couple maximal", value: "107 N·m" },
      { icon: "settings", label: "Transmission", value: "Automatique" },
      { icon: "ruler", label: "Longueur", value: "3 700 mm" },
      { icon: "ruler", label: "Empattement", value: "2 435 mm" },
    ],
  },
  jimny: {
    name: "Jimny",
    category: "4x4 tout-terrain compact",
    vehicle: "/images/vehicles/Jimny.png",
    description: "Un véritable 4x4 compact Suzuki, conçu pour rester agile sur route comme hors des sentiers battus.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "1.5L essence" },
      { icon: "gauge", label: "Puissance maximale", value: "102 hp" },
      { icon: "settings", label: "Couple maximal", value: "130 N·m" },
      { icon: "settings", label: "Transmission", value: "4AT · 4WD" },
      { icon: "ruler", label: "Longueur", value: "3 645 mm" },
      { icon: "ruler", label: "Empattement", value: "2 250 mm" },
    ],
  },
  "s-cross": {
    name: "S-Cross",
    category: "SUV familial",
    vehicle: "/images/vehicles/SCross.png",
    description: "Un crossover Suzuki polyvalent qui associe confort, espace et technologies adaptées aux trajets en famille.",
    specifications: [
      { icon: "fuel", label: "Motorisation", value: "1.4L BOOSTERJET" },
      { icon: "gauge", label: "Puissance maximale", value: "129 hp" },
      { icon: "settings", label: "Couple maximal", value: "235 N·m" },
      { icon: "settings", label: "Transmission", value: "Automatique 6 rapports" },
      { icon: "ruler", label: "Longueur", value: "4 300 mm" },
      { icon: "ruler", label: "Empattement", value: "2 600 mm" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const vehicle = models[(await params).model];
  return vehicle ? { title: `Suzuki ${vehicle.name}`, description: `Decouvrez le Suzuki ${vehicle.name} chez Caribe Motors.` } : {};
}

export default async function SuzukiModelPage({ params }: { params: Promise<{ model: string }> }) {
  const vehicle = models[(await params).model];
  if (!vehicle) notFound();

  return <div className="min-h-screen bg-white text-[#102a56]">
    <Navbar />
    <main>
      <Suspense fallback={null}>
        <VehicleDetailHero brand="Suzuki" name={vehicle.name} category={vehicle.category} logo="/images/brands/Suzuki.png" vehicle={vehicle.vehicle} description={vehicle.description} brandFirst />
      </Suspense>
      <VehicleSpecifications brand={`Suzuki ${vehicle.name}`} specifications={vehicle.specifications} />
      {vehicle.gallery && <VehicleGallery brand="Suzuki" name={vehicle.name} images={vehicle.gallery} />}
      <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="Suzuki chez Caribe Motors" delay={0.1} stagger={0.18} /></p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Pret pour votre prochaine aventure." delay={0.7} stagger={0.22} duration={0.7} /></h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre equipe pour connaitre la disponibilite et planifier votre essai du Suzuki Vitara." delay={1.8} stagger={0.075} duration={0.48} /></p>
          </div>
          <Reveal delay={3.1}><Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
