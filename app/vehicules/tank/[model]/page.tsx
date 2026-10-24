import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VehicleDetailHero from "@/components/VehicleDetailHero";
import VehicleColorExperience, { type VehicleColor } from "@/components/VehicleColorExperience";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecifications, { type VehicleSpecification } from "@/components/VehicleSpecifications";
import WordReveal from "@/components/WordReveal";

type Model = { name: string; category: string; image: string; description: string; colors: VehicleColor[]; gallery: string[]; specifications: VehicleSpecification[] };

const models: Record<string, Model> = {
  "tank-500": {
    name: "Tank 500", category: "SUV 4x4 premium", image: "/images/tank/tank-500/nav/gold.png",
    description: "Un grand SUV 4x4 conçu pour associer confort de voyage, capacité tout-terrain et présence affirmée.",
    colors: [{ id: "gold", name: "Jaune abricot", hex: "#c8ae80", borderHex: "#92764d", image: "/images/tank/tank-500/nav/gold.png" }, { id: "silver", name: "Argent", hex: "#a8adb1", borderHex: "#73777b", image: "/images/tank/tank-500/nav/silver.png" }, { id: "black", name: "Noir", hex: "#171717", borderHex: "#3f3f46", image: "/images/tank/tank-500/nav/black.png" }],
    gallery: ["/images/vehicle-details/tank-500/exterior.jpg", "/images/vehicle-details/tank-500/interior.jpg", "/images/vehicle-details/tank-500/cabin.jpg"],
    specifications: [{ icon: "fuel", label: "Motorisation", value: "3.0L V6 bi-turbo" }, { icon: "gauge", label: "Puissance maximale", value: "348 hp" }, { icon: "settings", label: "Couple maximal", value: "500 N·m" }, { icon: "settings", label: "Transmission", value: "9AT · 4WD" }, { icon: "ruler", label: "Longueur", value: "5 078 mm" }, { icon: "ruler", label: "Empattement", value: "2 850 mm" }],
  },
  "tank-300": {
    name: "Tank 300", category: "SUV 4x4 tout-terrain", image: "/images/tank/tank-300/nav/graphite.png",
    description: "Un 4x4 compact et robuste, pensé pour passer de la ville aux terrains les plus exigeants avec assurance.",
    colors: [{ id: "graphite", name: "Gris graphite", hex: "#3f454b", borderHex: "#24282c", image: "/images/tank/tank-300/nav/graphite.png" }, { id: "orange", name: "Orange", hex: "#e8592d", borderHex: "#b13d1c", image: "/images/tank/tank-300/nav/orange.png" }, { id: "gray", name: "Gris clair", hex: "#92aee2", borderHex: "#607fb4", image: "/images/tank/tank-300/nav/gray.png" }, { id: "white", name: "Blanc", hex: "#edf0ee", borderHex: "#aeb4b2", image: "/images/tank/tank-300/nav/white.png" }],
    gallery: ["/images/vehicle-details/tank-300/exterior.jpg", "/images/vehicle-details/tank-300/interior.jpg", "/images/vehicle-details/tank-300/cabin.jpg"],
    specifications: [{ icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" }, { icon: "gauge", label: "Puissance maximale", value: "220 hp" }, { icon: "settings", label: "Couple maximal", value: "380 N·m" }, { icon: "settings", label: "Transmission", value: "8AT · 4WD" }, { icon: "ruler", label: "Longueur", value: "4 760 mm" }, { icon: "ruler", label: "Empattement", value: "2 750 mm" }],
  },
};

export function generateStaticParams() { return Object.keys(models).map((model) => ({ model })); }
export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> { const car = models[(await params).model]; return car ? { title: `TANK ${car.name.replace("Tank ", "")}`, description: `Découvrez le ${car.name} chez Caribe Motors.` } : {}; }

export default async function TankModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model];
  if (!car) notFound();
  return <div className="min-h-screen bg-white text-[#102a56]"><Navbar /><main>
    <VehicleDetailHero brand="GWM Tank" name={car.name} category={car.category} logo="/images/brands/Tank.png" vehicle={car.image} colorImages={Object.fromEntries(car.colors.map((color) => [color.id, color.image]))} description={car.description} />
    <VehicleColorExperience name={car.name} colors={car.colors} />
    <VehicleSpecifications brand={car.name} specifications={car.specifications} />
    <VehicleGallery brand="GWM Tank" name={car.name} images={car.gallery} />
    <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="GWM Tank chez Caribe Motors" delay={0.1} stagger={0.18} /></p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Prêt pour votre prochain défi." delay={0.7} stagger={0.22} duration={0.7} /></h2><p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre équipe pour connaître la disponibilité, les équipements et planifier un essai." delay={1.8} stagger={0.075} duration={0.48} /></p></div><Reveal delay={3.1}><Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link></Reveal></div></section>
  </main><Footer /></div>;
}
