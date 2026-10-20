"use client";

import Image from "next/image";
import { useState } from "react";
import TestDriveModal from "@/components/TestDriveModal";

type BrandId = "jetour" | "chery" | "suzuki" | "jeep" | "dodge";

interface ColorOption {
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
  image: string;
  modelLogo?: string;
  colors?: ColorOption[];
}

interface Brand {
  id: BrandId;
  name: string;
  logo: string;
  vehicles: Vehicle[];
}

const T1_COLORS: ColorOption[] = [
  { id: "black", name: "Noir Onyx", hex: "#18181b", borderHex: "#3f3f46", image: "/images/jetour/t1-black.png" },
  { id: "white", name: "Blanc Glacier", hex: "#f8fafc", borderHex: "#cbd5e1", image: "/images/jetour/t1-white.png" },
  { id: "silver", name: "Argent Lunaire", hex: "#94a3b8", borderHex: "#64748b", image: "/images/jetour/t1-silver.png" },
  { id: "green", name: "Vert Aventure", hex: "#475e55", borderHex: "#2b3b35", image: "/images/jetour/t1-green.png" },
  { id: "gold", name: "Or Désert", hex: "#bca88e", borderHex: "#8f7c65", image: "/images/jetour/t1-gold.png" },
];

const BRANDS: Brand[] = [
  {
    id: "jetour",
    name: "Jetour",
    logo: "/images/brands/jetour.png",
    vehicles: [
      { id: "t1", name: "T1", category: "SUV tout-terrain", image: "/images/jetour/t1-black.png", colors: T1_COLORS },
      { id: "t2", name: "T2", category: "4x4 nouvelle génération", image: "/images/jetour/model-t2.png" },
      { id: "dashing", name: "Dashing", category: "SUV coupé", image: "/images/jetour/model-dashing.png" },
      { id: "x70", name: "X70", category: "SUV familial", image: "/images/jetour/model-x70.png" },
      { id: "x70plus", name: "X70 Plus", category: "SUV familial", image: "/images/jetour/model-x70plus.png" },
      { id: "x90plus", name: "X90 Plus", category: "Grand SUV", image: "/images/jetour/model-x90plus.png" },
    ],
  },
  {
    id: "chery",
    name: "Chery",
    logo: "/images/brands/Chery.png",
    vehicles: [
      { id: "himla", name: "Himla", category: "Pick-up", image: "/images/chery/vehicles/himla.png", modelLogo: "/images/chery/logos/himla.png" },
      { id: "tiggo-2", name: "Tiggo 2", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-2.png", modelLogo: "/images/chery/logos/tiggo-2.png" },
      { id: "tiggo-4", name: "Tiggo 4", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-4.png", modelLogo: "/images/chery/logos/tiggo-4.png" },
      { id: "tiggo-7", name: "Tiggo 7", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-7.png", modelLogo: "/images/chery/logos/tiggo-7.png" },
      { id: "tiggo-7-csh", name: "Tiggo 7 CSH", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-7-csh.png", modelLogo: "/images/chery/logos/tiggo-7-csh.png" },
      { id: "tiggo-8", name: "Tiggo 8", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-8.png", modelLogo: "/images/chery/logos/tiggo-8.png" },
      { id: "tiggo-8-csh", name: "Tiggo 8 CSH", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-8-csh.png", modelLogo: "/images/chery/logos/tiggo-8-csh.png" },
      { id: "tiggo-9", name: "Tiggo 9", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-9.png", modelLogo: "/images/chery/logos/tiggo-9.png" },
      { id: "tiggo-9-csh", name: "Tiggo 9 CSH", category: "Collection Tiggo", image: "/images/chery/vehicles/tiggo-9-csh.png", modelLogo: "/images/chery/logos/tiggo-9-csh.png" },
    ],
  },
  {
    id: "suzuki",
    name: "Suzuki",
    logo: "/images/brands/Suzuki.png",
    vehicles: [
      { id: "ignis", name: "Ignis", category: "Crossover urbain", image: "/images/vehicles/Ignis.png" },
      { id: "jimny", name: "Jimny", category: "4x4 compact", image: "/images/vehicles/Jimny.png" },
      { id: "s-cross", name: "S-Cross", category: "SUV polyvalent", image: "/images/vehicles/SCross.png" },
    ],
  },
  {
    id: "jeep",
    name: "Jeep",
    logo: "/images/brands/Jeep.png",
    vehicles: [
      { id: "compass", name: "Compass", category: "SUV", image: "/images/vehicles/Compass.png" },
      { id: "gladiator", name: "Gladiator", category: "Pick-up", image: "/images/vehicles/Gladiator.png" },
      { id: "grand-cherokee", name: "Grand Cherokee", category: "SUV premium", image: "/images/vehicles/GrandCheerokee.png" },
      { id: "wrangler", name: "Wrangler", category: "4x4 iconique", image: "/images/vehicles/Wrangler.png" },
    ],
  },
  {
    id: "dodge",
    name: "Dodge",
    logo: "/images/brands/Dodge.png",
    vehicles: [{ id: "durango", name: "Durango", category: "SUV performance", image: "/images/vehicles/Durango.png" }],
  },
];

export default function VehicleConfigurator() {
  const [selectedBrandId, setSelectedBrandId] = useState<BrandId>("jetour");
  const [selectedVehicleId, setSelectedVehicleId] = useState("t1");
  const [selectedColor, setSelectedColor] = useState<ColorOption>(T1_COLORS[0]);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const selectedBrand = BRANDS.find((brand) => brand.id === selectedBrandId) ?? BRANDS[0];
  const selectedVehicle = selectedBrand.vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? selectedBrand.vehicles[0];
  const displayImage = selectedVehicle.colors ? selectedColor.image : selectedVehicle.image;
  const colorName = selectedVehicle.colors ? selectedColor.name : "Couleur de présentation constructeur";

  const chooseBrand = (brand: Brand) => {
    setSelectedBrandId(brand.id);
    setSelectedVehicleId(brand.vehicles[0].id);
    setSelectedColor(brand.vehicles[0].colors?.[0] ?? T1_COLORS[0]);
  };

  const chooseVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleId(vehicle.id);
    setSelectedColor(vehicle.colors?.[0] ?? T1_COLORS[0]);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 -top-32 h-80 w-[680px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[130px]" />
          <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-emerald-50 blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:min-h-[410px] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="order-2 max-w-md lg:order-1">
              <div className={`relative ${selectedBrand.id === "chery" ? "h-12 w-52" : "h-10 w-36"}`}><Image src={selectedBrand.logo} alt={selectedBrand.name} fill sizes="208px" className="object-contain object-left" /></div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#54b834]">{selectedVehicle.category}</p>
              {selectedVehicle.modelLogo && <div className="relative mt-4 h-8 w-40"><Image src={selectedVehicle.modelLogo} alt={selectedVehicle.name} fill sizes="160px" className="object-contain object-left" /></div>}
              <h1 className="mt-3 text-4xl font-black tracking-tight text-[#102a56]">{selectedBrand.name} {selectedVehicle.name}</h1>

              {selectedVehicle.colors && (
                <div className="mt-7">
                  <p className="text-sm font-bold text-slate-600">Choisissez une couleur</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {selectedVehicle.colors.map((color) => {
                      const active = selectedColor.id === color.id;
                      return <button key={color.id} type="button" onClick={() => setSelectedColor(color)} aria-label={`Choisir ${color.name}`} aria-pressed={active} className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors ${active ? "border-[#54b834]" : "border-transparent hover:border-slate-300"}`}><span className="h-8 w-8 rounded-full" style={{ backgroundColor: color.hex, border: `2px solid ${color.borderHex}` }} /></button>;
                    })}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-500">{colorName}</p>
                </div>
              )}

              <button type="button" onClick={() => setIsTestDriveOpen(true)} className="mt-8 rounded-xl bg-[#54b834] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#469f2d]">Demander un essai</button>
            </div>

            <div className="relative order-1 min-h-[280px] sm:min-h-[370px] lg:order-2">
              <div className="absolute inset-x-[12%] bottom-[17%] h-14 rounded-full bg-slate-900/15 blur-2xl" />
              <Image src={displayImage} alt={`${selectedBrand.name} ${selectedVehicle.name} - ${colorName}`} fill priority sizes="(max-width: 1024px) 100vw, 62vw" className="object-contain drop-shadow-[0_24px_25px_rgba(15,23,42,0.2)]" />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <div className={`relative ${selectedBrand.id === "chery" ? "h-9 w-40" : "h-7 w-28"}`}><Image src={selectedBrand.logo} alt={selectedBrand.name} fill sizes="160px" className="object-contain object-left" /></div>
                <span className="text-sm font-bold text-[#102a56]">Tous les modèles</span>
                <span className="text-xs font-semibold text-slate-400">{selectedBrand.vehicles.length}</span>
              </div>
              <div className="flex items-center gap-4" aria-label="Changer de marque">
                {BRANDS.map((brand) => {
                  const active = selectedBrand.id === brand.id;
                  return <button key={brand.id} type="button" onClick={() => chooseBrand(brand)} aria-label={`Afficher ${brand.name}`} aria-pressed={active} className={`relative h-10 w-28 border-b-2 px-2 transition-all ${active ? "border-[#54b834] opacity-100" : "border-transparent opacity-65 hover:opacity-100"}`}><Image src={brand.logo} alt={brand.name} fill sizes="112px" className="object-contain" /></button>;
                })}
              </div>
            </div>

            <div className="mt-4 flex items-end gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={`Gamme ${selectedBrand.name}`}>
              {selectedBrand.vehicles.map((vehicle) => {
                const active = selectedVehicle.id === vehicle.id;
                return (
                  <button key={vehicle.id} type="button" onClick={() => chooseVehicle(vehicle)} aria-pressed={active} className={`shrink-0 border-b-2 px-1 pb-2 text-left transition-colors ${active ? "border-[#54b834] text-[#102a56]" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#102a56]"}`}>
                    <span className="relative block h-20 w-32 sm:h-24 sm:w-40"><Image src={vehicle.image} alt={`${selectedBrand.name} ${vehicle.name}`} fill sizes="160px" className="object-contain" /></span>
                    {vehicle.modelLogo ? <span className="relative mt-1 block h-5 w-24"><Image src={vehicle.modelLogo} alt={vehicle.name} fill sizes="96px" className="object-contain object-left" /></span> : <span className="mt-1 block text-sm font-bold">{vehicle.name}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TestDriveModal isOpen={isTestDriveOpen} onClose={() => setIsTestDriveOpen(false)} carModel={`${selectedBrand.name} ${selectedVehicle.name}`} carColor={colorName} carImage={displayImage} />
    </>
  );
}
