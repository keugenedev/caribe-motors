import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import VehicleColorExperience, { type VehicleColor } from "@/components/VehicleColorExperience";
import VehicleDetailHero from "@/components/VehicleDetailHero";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecifications, { type VehicleSpecification } from "@/components/VehicleSpecifications";
import WordReveal from "@/components/WordReveal";

type Model = { name: string; category: string; image: string; description: string; colors?: VehicleColor[]; gallery: string[]; specifications: VehicleSpecification[] };

const models: Record<string, Model> = {
  h9: {
    name: "H9", category: "Grand SUV familial 4x4", image: "/images/haval/h9.png",
    description: "Un grand SUV Haval à sept places, conçu pour les trajets en famille comme pour les aventures hors des sentiers battus.",
    colors: [{ id: "blue", name: "Bleu", hex: "#244b75", borderHex: "#142f4b", image: "/images/haval/h9.png" }, { id: "white", name: "Blanc", hex: "#edf0ee", borderHex: "#afb5b2", image: "/images/haval/h9-white.png" }, { id: "black", name: "Noir", hex: "#171717", borderHex: "#3f3f46", image: "/images/haval/h9-black.png" }],
    gallery: ["/images/vehicle-details/haval-h9/exterior.jpg", "/images/vehicle-details/haval-h9/interior.jpg", "/images/vehicle-details/haval-h9/detail.jpg"],
    specifications: [{ icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" }, { icon: "gauge", label: "Puissance maximale", value: "214 hp" }, { icon: "settings", label: "Couple maximal", value: "380 N·m" }, { icon: "settings", label: "Transmission", value: "ZF 8AT · 4WD" }, { icon: "ruler", label: "Longueur", value: "4 950 mm" }, { icon: "ruler", label: "Empattement", value: "2 850 mm" }],
  },
  h7: {
    name: "H7", category: "SUV familial 4x4", image: "/images/haval/h7/hero.jpeg",
    description: "Un SUV Haval spacieux et robuste, conçu pour associer confort familial, technologies modernes et capacités 4x4.",
    colors: [
      { id: "green", name: "Vert", hex: "#31483b", borderHex: "#1f3027", image: "/images/haval/h7/vert.png" },
      { id: "black", name: "Noir", hex: "#171717", borderHex: "#3f3f46", image: "/images/haval/h7/noir.png" },
      { id: "white", name: "Blanc", hex: "#eef0ed", borderHex: "#adb3ad", image: "/images/haval/h7/blanc.png" },
    ],
    gallery: ["/images/haval/h7/front.jpeg", "/images/haval/h7/interior.jpeg", "/images/haval/h7/wheel.jpeg", "/images/haval/h7/rear-light.jpeg"],
    specifications: [{ icon: "fuel", label: "Motorisation", value: "2.0L Turbo essence" }, { icon: "gauge", label: "Puissance maximale", value: "231 hp" }, { icon: "settings", label: "Couple maximal", value: "380 N·m" }, { icon: "settings", label: "Transmission", value: "9DCT · 4WD" }, { icon: "ruler", label: "Longueur", value: "4 705 mm" }, { icon: "ruler", label: "Empattement", value: "2 810 mm" }],
  },
};

export function generateStaticParams() { return Object.keys(models).map((model) => ({ model })); }
export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> { const car = models[(await params).model]; return car ? { title: `Haval ${car.name}`, description: `Découvrez le Haval ${car.name} chez Caribe Motors.` } : {}; }

export default async function HavalModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model];
  if (!car) notFound();
  return <div className="min-h-screen bg-white text-[#102a56]"><Navbar /><main>
    <Suspense fallback={null}>
      <VehicleDetailHero brand="Haval" name={car.name} category={car.category} logo="/images/brands/Haval.png" vehicle={car.image} colorImages={car.colors ? Object.fromEntries(car.colors.map((color) => [color.id, color.image])) : undefined} description={car.description} brandFirst />
      {car.colors && <VehicleColorExperience name={`Haval ${car.name}`} colors={car.colors} />}
    </Suspense>
    <VehicleSpecifications brand={`Haval ${car.name}`} specifications={car.specifications} />
    <VehicleGallery brand="Haval" name={car.name} images={car.gallery} />
    <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="Haval chez Caribe Motors" delay={0.1} stagger={0.18} /></p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Prêt pour votre prochaine aventure." delay={0.7} stagger={0.22} duration={0.7} /></h2><p className="mt-5 max-w-xl text-base leading-8 text-slate-600"><WordReveal text="Contactez notre équipe pour connaître la disponibilité, les équipements et planifier un essai." delay={1.8} stagger={0.075} duration={0.48} /></p></div><Reveal delay={3.1}><Link href="/contact" className="inline-flex items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-4 w-4" /> Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link></Reveal></div></section>
  </main><Footer /></div>;
}
