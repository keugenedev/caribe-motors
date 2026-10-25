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
  vehicle: string;
  description: string;
  specifications: VehicleSpecification[];
};

const models: Record<string, Model> = {
  "camion-caisse": {
    name: "Camion caisse",
    category: "Transport professionnel",
    vehicle: "/images/faw/camion-caisse.png",
    description: "Une solution FAW pour le transport de marchandises, avec une caisse fermee adaptee aux activites professionnelles.",
    specifications: [
      { icon: "fuel", label: "Usage", value: "Transport de marchandises" },
      { icon: "gauge", label: "Carrosserie", value: "Caisse fermee" },
      { icon: "settings", label: "Configuration", value: "Camion professionnel" },
      { icon: "settings", label: "Cabine", value: "Cabine simple" },
      { icon: "ruler", label: "Amenagement", value: "Selon vos besoins" },
      { icon: "ruler", label: "Disponibilite", value: "Nous consulter" },
    ],
  },
  "camion-plateau": {
    name: "Camion plateau",
    category: "Transport professionnel",
    vehicle: "/images/faw/camion-plateau.png",
    description: "Un camion FAW polyvalent avec plateau a ridelles, concu pour transporter votre materiel au quotidien.",
    specifications: [
      { icon: "fuel", label: "Usage", value: "Transport de materiel" },
      { icon: "gauge", label: "Carrosserie", value: "Plateau a ridelles" },
      { icon: "settings", label: "Configuration", value: "Camion professionnel" },
      { icon: "settings", label: "Cabine", value: "Cabine simple" },
      { icon: "ruler", label: "Chargement", value: "Configuration polyvalente" },
      { icon: "ruler", label: "Disponibilite", value: "Nous consulter" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const vehicle = models[(await params).model];
  return vehicle ? { title: `FAW ${vehicle.name}`, description: `Decouvrez le FAW ${vehicle.name} chez Caribe Motors.` } : {};
}

export default async function FawModelPage({ params }: { params: Promise<{ model: string }> }) {
  const vehicle = models[(await params).model];
  if (!vehicle) notFound();

  return <div className="min-h-screen bg-white text-[#102a56]">
    <Navbar />
    <main>
      <Suspense fallback={null}>
        <VehicleDetailHero brand="FAW" name={vehicle.name} category={vehicle.category} logo="/images/brands/FAW.png" vehicle={vehicle.vehicle} description={vehicle.description} brandFirst />
      </Suspense>
      <VehicleSpecifications brand={`FAW ${vehicle.name}`} specifications={vehicle.specifications} />
      <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="FAW chez Caribe Motors" delay={0.1} stagger={0.18} /></p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Pret pour vos activites." delay={0.7} stagger={0.22} duration={0.7} /></h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre equipe pour connaitre la disponibilite et choisir la configuration adaptee a votre activite." delay={1.8} stagger={0.075} duration={0.48} /></p>
          </div>
          <Reveal delay={3.1}><Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
