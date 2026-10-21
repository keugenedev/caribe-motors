import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import JetourGallery from "@/components/JetourGallery";
import JetourModelHero from "@/components/JetourModelHero";
import JetourSpecifications, { type JetourSpecification } from "@/components/JetourSpecifications";
import Navbar from "@/components/Navbar";

type Model = {
  name: string;
  category: string;
  description: string;
  gallery: string[];
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  seats: string;
  consumption: string;
  dimensions: string;
  wheelbase: string;
};

const image = (model: string, file: string) => `/images/jetour/models/${model}/${file}`;

const models: Record<string, Model> = {
  t1: {
    name: "T1", category: "SUV tout-terrain", description: "Une silhouette robuste et contemporaine, conçue pour transformer les trajets quotidiens en véritables escapades.",
    gallery: [image("t1", "t1-001-1.jpg"), image("t1", "t1-006-interieur.jpg"), image("t1", "t1-007-2.jpg")],
    engine: "1.5L / 2.0L turbo", power: "125–187 kW", torque: "270–390 Nm", transmission: "DCT / automatique", seats: "5 places", consumption: "Variable selon version", dimensions: "Classe 4,7 m", wheelbase: "~2 800 mm",
  },
  t2: {
    name: "T2", category: "4x4 nouvelle génération", description: "Le caractère d’un 4x4 allié au confort d’un SUV moderne, pour aller plus loin avec style et assurance.",
    gallery: [image("t2", "t2-001-1.avif"), image("t2", "t2-006-interieur.webp"), image("t2", "t2-014-7.webp")],
    engine: "1.5L turbo essence", power: "135–187 kW", torque: "275–390 Nm", transmission: "Automatique / DCT", seats: "5 places", consumption: "Selon motorisation", dimensions: "~4 785 × 2 006 × 1 880 mm", wheelbase: "~2 800 mm",
  },
  x50: {
    name: "X50", category: "SUV compact", description: "Compact, dynamique et facile à vivre : le SUV qui apporte plus de style et de polyvalence à chaque déplacement.",
    gallery: [image("x50", "x50-001-7.png"), image("x50", "x50-006-interieur.avif"), image("x50", "x50-007-1.avif")],
    engine: "1.5L turbo essence", power: "~115 kW", torque: "~230 Nm", transmission: "6-DCT", seats: "5 places", consumption: "~7–9 L/100 km", dimensions: "~4 500 × 1 850 × 1 650 mm", wheelbase: "~2 670 mm",
  },
  dashing: {
    name: "Dashing", category: "SUV coupé", description: "Une allure athlétique et un intérieur connecté pour celles et ceux qui veulent un SUV au style résolument différent.",
    gallery: [image("dashing", "dashing-001-16.avif"), image("dashing", "dashing-005-15.png"), image("dashing", "dashing-007-1.webp")],
    engine: "1.6L TGDI turbo", power: "145 kW", torque: "~290 Nm", transmission: "7-DCT", seats: "5 places", consumption: "~6,5–8,5 L/100 km", dimensions: "~4 620 × 1 900 × 1 690 mm", wheelbase: "~2 720 mm",
  },
  "x70-fl": {
    name: "X70 FL", category: "SUV familial", description: "Un SUV familial spacieux, pensé pour rassembler confort, polyvalence et sérénité à bord.",
    gallery: [image("x70-fl", "x70-fl-001-1.png"), image("x70-fl", "x70-fl-004-interieur.png"), image("x70-fl", "x70-fl-005-4.avif")],
    engine: "1.5L turbo", power: "115 kW", torque: "230 Nm", transmission: "6-DCT", seats: "7 places", consumption: "~7–9 L/100 km", dimensions: "~4 724 × 1 900 × 1 720 mm", wheelbase: "2 720 mm",
  },
  "x70-plus": {
    name: "X70 Plus", category: "SUV familial", description: "Un grand SUV qui donne à la famille davantage d’espace, de confort et de présence sur la route.",
    gallery: [image("x70-plus", "x70-plus-001-1.png"), image("x70-plus", "x70-plus-004-interieur.png"), image("x70-plus", "x70-plus-005-3.png")],
    engine: "1.5L turbo · 1 498 cm³", power: "115 kW à 5 500 tr/min", torque: "230 Nm", transmission: "6-DCT", seats: "7 places", consumption: "~7–9 L/100 km", dimensions: "4 724 × 1 900 × 1 720 mm", wheelbase: "2 720 mm",
  },
  "x90-plus": {
    name: "X90 Plus", category: "Grand SUV", description: "De l’espace pour chaque passager et de la puissance pour les longues distances, dans un SUV à l’allure premium.",
    gallery: [image("x90-plus", "x90-plus-003-1.png"), image("x90-plus", "x90-plus-002-interieur.png"), image("x90-plus", "x90-plus-004-2.png")],
    engine: "2.0L turbo", power: "~187 kW", torque: "~390 Nm", transmission: "DCT", seats: "7 places", consumption: "~8–11 L/100 km", dimensions: "~4 858 × 1 925 × 1 780 mm", wheelbase: "~2 850 mm",
  },
  g700: {
    name: "Zongheng G700", category: "Grand SUV d’aventure", description: "Une présence imposante et une conception orientée aventure pour envisager les grands trajets sans compromis.",
    gallery: [image("g700", "g700-001-5.avif"), image("g700", "g700-004-interieur.avif"), image("g700", "g700-009-2.jpg")],
    engine: "V6 / hybride selon marché", power: "Élevée", torque: "Élevé", transmission: "Automatique", seats: "5–7 places", consumption: "Variable", dimensions: "Grand SUV à châssis", wheelbase: "Empattement long",
  },
};

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const car = models[(await params).model];
  return car ? { title: `Jetour ${car.name}`, description: `Découvrez le Jetour ${car.name} chez Caribe Motors.` } : {};
}

export default async function JetourModelPage({ params }: { params: Promise<{ model: string }> }) {
  const car = models[(await params).model];
  if (!car) notFound();

  const specifications: JetourSpecification[] = [
    { icon: "fuel", label: "Motorisation", value: car.engine },
    { icon: "gauge", label: "Puissance maximale", value: car.power },
    { icon: "settings", label: "Couple maximal", value: car.torque },
    { icon: "settings", label: "Transmission", value: car.transmission },
    { icon: "seats", label: "Capacité", value: car.seats },
    { icon: "fuel", label: "Consommation", value: car.consumption },
    { icon: "ruler", label: "Dimensions", value: car.dimensions },
    { icon: "ruler", label: "Empattement", value: car.wheelbase },
  ];

  return (
    <div className="min-h-screen bg-white text-[#102a56]">
      <Navbar />
      <main>
        <JetourModelHero name={car.name} category={car.category} description={car.description} image={car.gallery[0]} />
        <JetourSpecifications specifications={specifications} />
        <JetourGallery name={car.name} images={car.gallery} />
        <section className="bg-[#07131d] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#83d6de]">Jetour chez Caribe Motors</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Votre prochaine aventure commence ici.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">Contactez notre équipe pour connaître la disponibilité, les versions et les équipements du Jetour {car.name}.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/vehicules/jetour/experience" className="inline-flex w-fit items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#07131d]">Explorer en 2D et 720° <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex w-fit items-center gap-2 bg-[#54b834] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#469f2d]">
                <CarFront className="h-4 w-4" /> Demander un essai <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
