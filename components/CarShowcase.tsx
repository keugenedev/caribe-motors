"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type BrandId = "jetour" | "chery" | "suzuki" | "jeep" | "dodge";

interface CarColor {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  image: string;
}

interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  modelLogo?: string;
  colors?: CarColor[];
}

interface BrandPresentation {
  id: BrandId;
  name: string;
  logo: string;
  eyebrow: string;
  headline: string;
  background: string;
  accent: string;
  vehicles: Vehicle[];
}

const T1_COLORS: CarColor[] = [
  { id: "black", name: "Noir Onyx", hex: "#18181b", borderHex: "#3f3f46", image: "/images/jetour/t1-black.png" },
  { id: "white", name: "Blanc Glacier", hex: "#f8fafc", borderHex: "#cbd5e1", image: "/images/jetour/t1-white.png" },
  { id: "silver", name: "Argent Lunaire", hex: "#94a3b8", borderHex: "#64748b", image: "/images/jetour/t1-silver.png" },
  { id: "green", name: "Vert Aventure", hex: "#475e55", borderHex: "#2b3b35", image: "/images/jetour/t1-green.png" },
  { id: "gold", name: "Or Désert", hex: "#bca88e", borderHex: "#8f7c65", image: "/images/jetour/t1-gold.png" },
];

const PRESENTATIONS: BrandPresentation[] = [
  {
    id: "jetour",
    name: "Jetour",
    logo: "/images/brands/jetour.png",
    eyebrow: "01 — Collection Jetour",
    headline: "L’aventure prend une nouvelle dimension.",
    background: "#f7faff",
    accent: "#1643aa",
    vehicles: [
      { id: "t1", name: "T1", category: "SUV tout-terrain", description: "Un SUV conçu pour sortir des sentiers battus.", image: "/images/jetour/t1-black.png", colors: T1_COLORS },
      { id: "t2", name: "T2", category: "4x4 nouvelle génération", description: "Une silhouette affirmée pour tous les horizons.", image: "/images/jetour/model-t2.png" },
      { id: "dashing", name: "Dashing", category: "SUV coupé", description: "Un design contemporain pensé pour la ville.", image: "/images/jetour/model-dashing.png" },
      { id: "x70", name: "X70", category: "SUV familial", description: "De l’espace pour accompagner chaque projet.", image: "/images/jetour/model-x70.png" },
      { id: "x70plus", name: "X70 Plus", category: "SUV familial", description: "Confort et polyvalence au quotidien.", image: "/images/jetour/model-x70plus.png" },
      { id: "x90plus", name: "X90 Plus", category: "Grand SUV", description: "Une présence premium pour les grands trajets.", image: "/images/jetour/model-x90plus.png" },
    ],
  },
  {
    id: "chery",
    name: "Chery",
    logo: "/images/brands/Chery.png",
    eyebrow: "02 — Collection Chery",
    headline: "La gamme Chery, modèle après modèle.",
    background: "#fbfaf8",
    accent: "#9d6b2f",
    vehicles: [
      { id: "himla", name: "Himla", category: "Pick-up", description: "Découvrez le Chery Himla chez Caribe Motors.", image: "/images/chery/vehicles/himla.png", modelLogo: "/images/chery/logos/himla.png" },
      { id: "tiggo-2", name: "Tiggo 2", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 2 chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-2.png", modelLogo: "/images/chery/logos/tiggo-2.png" },
      { id: "tiggo-4", name: "Tiggo 4", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 4 chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-4.png", modelLogo: "/images/chery/logos/tiggo-4.png" },
      { id: "tiggo-7", name: "Tiggo 7", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 7 chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-7.png", modelLogo: "/images/chery/logos/tiggo-7.png" },
      { id: "tiggo-7-csh", name: "Tiggo 7 CSH", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 7 CSH chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-7-csh.png", modelLogo: "/images/chery/logos/tiggo-7-csh.png" },
      { id: "tiggo-8", name: "Tiggo 8", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 8 chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-8.png", modelLogo: "/images/chery/logos/tiggo-8.png" },
      { id: "tiggo-8-csh", name: "Tiggo 8 CSH", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 8 CSH chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-8-csh.png", modelLogo: "/images/chery/logos/tiggo-8-csh.png" },
      { id: "tiggo-9", name: "Tiggo 9", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 9 chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-9.png", modelLogo: "/images/chery/logos/tiggo-9.png" },
      { id: "tiggo-9-csh", name: "Tiggo 9 CSH", category: "Collection Tiggo", description: "Découvrez le Chery Tiggo 9 CSH chez Caribe Motors.", image: "/images/chery/vehicles/tiggo-9-csh.png", modelLogo: "/images/chery/logos/tiggo-9-csh.png" },
    ],
  },
  {
    id: "suzuki",
    name: "Suzuki",
    logo: "/images/brands/Suzuki.png",
    eyebrow: "02 — Collection Suzuki",
    headline: "Compacte en ville. Libre partout.",
    background: "#fcfbf7",
    accent: "#1e438d",
    vehicles: [
      { id: "ignis", name: "Ignis", category: "Crossover urbain", description: "Un format agile, prêt pour le rythme de la ville.", image: "/images/vehicles/Ignis.png" },
      { id: "jimny", name: "Jimny", category: "4x4 compact", description: "Le caractère tout-terrain dans un format iconique.", image: "/images/vehicles/Jimny.png" },
      { id: "s-cross", name: "S-Cross", category: "SUV polyvalent", description: "Un SUV qui accompagne tous les trajets.", image: "/images/vehicles/SCross.png" },
    ],
  },
  {
    id: "jeep",
    name: "Jeep",
    logo: "/images/brands/Jeep.png",
    eyebrow: "03 — Collection Jeep",
    headline: "L’esprit de liberté, sans compromis.",
    background: "#f7f8f4",
    accent: "#31512f",
    vehicles: [
      { id: "compass", name: "Compass", category: "SUV", description: "Un SUV fait pour explorer en toute confiance.", image: "/images/vehicles/Compass.png" },
      { id: "gladiator", name: "Gladiator", category: "Pick-up", description: "La force d’un pick-up avec l’ADN Jeep.", image: "/images/vehicles/Gladiator.png" },
      { id: "grand-cherokee", name: "Grand Cherokee", category: "SUV premium", description: "Une interprétation raffinée de l’aventure.", image: "/images/vehicles/GrandCheerokee.png" },
      { id: "wrangler", name: "Wrangler", category: "4x4 iconique", description: "L’icône qui incarne l’aventure Jeep.", image: "/images/vehicles/Wrangler.png" },
    ],
  },
  {
    id: "dodge",
    name: "Dodge",
    logo: "/images/brands/Dodge.png",
    eyebrow: "04 — Collection Dodge",
    headline: "Une présence qui ne passe pas inaperçue.",
    background: "#fbf7f7",
    accent: "#9f1c2c",
    vehicles: [
      { id: "durango", name: "Durango", category: "SUV performance", description: "Un grand SUV au style Dodge affirmé.", image: "/images/vehicles/Durango.png" },
    ],
  },
];

const CATALOG = PRESENTATIONS.flatMap((brand) =>
  brand.vehicles.map((vehicle) => ({ brand, vehicle })),
);

interface CarShowcaseProps {
  onOpenTestDrive: (model: string, color: string, image: string) => void;
}

export default function CarShowcase({ onOpenTestDrive }: CarShowcaseProps) {
  const [catalogIndex, setCatalogIndex] = useState(0);
  const currentCatalog = CATALOG[catalogIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCatalogIndex((currentIndex) => (currentIndex + 1) % CATALOG.length);
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, []);

  const selectBrand = (brandId: BrandId) => {
    const firstIndex = CATALOG.findIndex((item) => item.brand.id === brandId);
    if (firstIndex >= 0) setCatalogIndex(firstIndex);
  };

  return (
    <section id="vehicules" className="bg-white">
      <div className="relative overflow-hidden bg-white px-4 py-14 text-[#102a56] sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={currentCatalog.vehicle.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                <div className="relative mt-6 h-8 w-28 sm:h-9 sm:w-32"><Image src={currentCatalog.brand.logo} alt={currentCatalog.brand.name} fill sizes="128px" className="object-contain object-left" /></div>
                {currentCatalog.vehicle.modelLogo && <div className="relative mt-5 h-7 w-36 sm:h-8 sm:w-40"><Image src={currentCatalog.vehicle.modelLogo} alt={currentCatalog.vehicle.name} fill sizes="160px" className="object-contain object-left" /></div>}
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#1643aa]">{currentCatalog.vehicle.category}</p>
                <h1 className="mt-2 max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{currentCatalog.brand.name} {currentCatalog.vehicle.name}</h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">{currentCatalog.vehicle.description}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-bold text-[#102a56]">{String(catalogIndex + 1).padStart(2, "0")}</span>
              <div className="h-1 w-36 overflow-hidden rounded-full bg-slate-200 sm:w-48"><motion.div className="h-full rounded-full bg-[#54b834]" animate={{ width: `${((catalogIndex + 1) / CATALOG.length) * 100}%` }} transition={{ duration: 0.35 }} /></div>
              <span className="text-xs font-semibold text-slate-500">{String(CATALOG.length).padStart(2, "0")} modèles</span>
            </div>
            <div className="mt-7 flex items-center gap-3">
              {PRESENTATIONS.map((brand) => (
                <button key={brand.id} type="button" onClick={() => selectBrand(brand.id)} aria-label={`Voir les modèles ${brand.name}`} className={`relative h-8 w-20 rounded-md p-1.5 transition-colors ${currentCatalog.brand.id === brand.id ? "border border-slate-200 bg-white" : "bg-slate-100 hover:bg-slate-200"}`}>
                  <Image src={brand.logo} alt={brand.name} fill sizes="80px" className="object-contain p-1.5" />
                </button>
              ))}
            </div>
            <a href={`#${currentCatalog.brand.id}`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#54b834] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#469f2d]">Voir la collection {currentCatalog.brand.name} <ArrowDown className="h-4 w-4" /></a>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[360px]" aria-live="polite">
            <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-[#54b834]/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div key={currentCatalog.vehicle.id} initial={{ opacity: 0, x: 44, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -38, scale: 0.98 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                <Image src={currentCatalog.vehicle.image} alt={`${currentCatalog.brand.name} ${currentCatalog.vehicle.name}`} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain object-center drop-shadow-[0_28px_28px_rgba(0,0,0,0.35)]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {PRESENTATIONS.map((brand, index) => (
        <BrandSlide key={brand.id} brand={brand} index={index} onOpenTestDrive={onOpenTestDrive} />
      ))}
    </section>
  );
}

function BrandSlide({ brand, index, onOpenTestDrive }: { brand: BrandPresentation; index: number; onOpenTestDrive: CarShowcaseProps["onOpenTestDrive"] }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState(brand.vehicles[0].id);
  const [selectedColor, setSelectedColor] = useState(brand.vehicles[0].colors?.[0]);
  const selectedVehicle = brand.vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? brand.vehicles[0];
  const displayImage = selectedColor?.image ?? selectedVehicle.image;
  const colorName = selectedColor?.name ?? "Couleur de présentation constructeur";

  const chooseVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleId(vehicle.id);
    setSelectedColor(vehicle.colors?.[0]);
  };

  return (
    <section id={brand.id} className="scroll-mt-36 px-4 py-14 sm:px-6 sm:py-20 lg:px-8" style={{ backgroundColor: brand.background }}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[520px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.18em]" style={{ color: brand.accent }}>{brand.eyebrow}</span>
            <span className="h-px flex-1 bg-slate-300" />
            <span className="text-xs font-bold text-slate-400">0{index + 1}/0{PRESENTATIONS.length}</span>
          </div>
          <div className="relative mt-7 h-9 w-28 sm:h-10 sm:w-32"><Image src={brand.logo} alt={brand.name} fill sizes="128px" className="object-contain object-left" /></div>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#102a56] sm:text-5xl">{brand.headline}</h2>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brand.accent }}>{selectedVehicle.category}</p>
          {selectedVehicle.modelLogo && <div className="relative mt-4 h-8 w-44"><Image src={selectedVehicle.modelLogo} alt={selectedVehicle.name} fill sizes="176px" className="object-contain object-left" /></div>}
          <h3 className="mt-2 text-2xl font-black text-[#102a56] sm:text-3xl">{brand.name} {selectedVehicle.name}</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{selectedVehicle.description}</p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label={`Modèles ${brand.name}`}>
            {brand.vehicles.map((vehicle) => {
              const active = selectedVehicle.id === vehicle.id;
              return <button key={vehicle.id} type="button" onClick={() => chooseVehicle(vehicle)} aria-pressed={active} className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${active ? "border-transparent text-white" : "border-slate-300 bg-transparent text-slate-600 hover:border-slate-500"}`} style={active ? { backgroundColor: brand.accent } : undefined}>{vehicle.name}</button>;
            })}
          </div>

          {selectedVehicle.colors && (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500">Couleur :</span>
              {selectedVehicle.colors.map((color) => {
                const active = selectedColor?.id === color.id;
                return <button key={color.id} type="button" aria-label={`Choisir ${color.name}`} aria-pressed={active} onClick={() => setSelectedColor(color)} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${active ? "border-[#54b834]" : "border-transparent hover:border-slate-400"}`}><span className="h-5 w-5 rounded-full" style={{ backgroundColor: color.hex, border: `1px solid ${color.borderHex}` }} /></button>;
              })}
            </div>
          )}

          <button type="button" onClick={() => onOpenTestDrive(`${brand.name} ${selectedVehicle.name}`, colorName, displayImage)} className="mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: brand.accent }}>
            Demander un essai <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[470px]">
          <div className="absolute inset-x-[12%] bottom-[18%] h-12 rounded-full bg-slate-900/15 blur-2xl" />
          <Image src={displayImage} alt={`${brand.name} ${selectedVehicle.name}`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-contain drop-shadow-[0_24px_25px_rgba(15,23,42,0.2)]" />
          <p className="absolute bottom-0 right-0 text-right text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Caribe Motors · {brand.name}</p>
        </div>
      </div>
    </section>
  );
}
