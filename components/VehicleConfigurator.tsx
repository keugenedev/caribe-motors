"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TestDriveModal from "@/components/TestDriveModal";

type BrandId = "jetour" | "chery" | "gwm" | "suzuki" | "jeep" | "dodge";

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

const GWM_P_SERIES_COLORS: ColorOption[] = [
  { id: "orange", name: "Orange volcanique", hex: "#c45a20", borderHex: "#924019", image: "/images/gwm/nav/orange.png" },
  { id: "red", name: "Rouge passion", hex: "#b12626", borderHex: "#7f1d1d", image: "/images/gwm/nav/red.png" },
  { id: "blue", name: "Bleu électrique", hex: "#1355ad", borderHex: "#0f3f80", image: "/images/gwm/nav/blue.png" },
  { id: "silver", name: "Gris argent", hex: "#9ca3af", borderHex: "#6b7280", image: "/images/gwm/nav/silver.png" },
  { id: "black", name: "Noir intense", hex: "#171717", borderHex: "#3f3f46", image: "/images/gwm/nav/black.png" },
  { id: "brown", name: "Brun bronze", hex: "#76563e", borderHex: "#4c3424", image: "/images/gwm/nav/brown.png" },
];

const BRANDS: Brand[] = [
  {
    id: "jetour",
    name: "Jetour",
    logo: "/images/brands/jetour.png",
    vehicles: [
      { id: "t1", name: "T1", category: "SUV tout-terrain", image: "/images/jetour/t1-black.png", colors: T1_COLORS },
      { id: "t2", name: "T2", category: "4x4 nouvelle génération", image: "/images/jetour/model-t2.png" },
      { id: "x50", name: "X50", category: "SUV compact", image: "/images/jetour/models/x50/x50-001-7.png" },
      { id: "dashing", name: "Dashing", category: "SUV coupé", image: "/images/jetour/model-dashing.png" },
      { id: "x70-fl", name: "X70 FL", category: "SUV familial", image: "/images/jetour/model-x70.png" },
      { id: "x70-plus", name: "X70 Plus", category: "SUV familial", image: "/images/jetour/model-x70plus.png" },
      { id: "x90-plus", name: "X90 Plus", category: "Grand SUV", image: "/images/jetour/model-x90plus.png" },
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
    id: "gwm",
    name: "GWM",
    logo: "/images/brands/GWM.png",
    vehicles: [
      { id: "p-series", name: "P-Series", category: "Pick-up 4x4", image: "/images/gwm/nav/brown.png", colors: GWM_P_SERIES_COLORS },
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
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [modalData, setModalData] = useState({
    model: "Jetour T1",
    color: "Noir Onyx",
    image: "/images/jetour/t1-black.png",
  });

  const openTestDrive = (brand: Brand, vehicle: Vehicle, color: string, image: string) => {
    setModalData({ model: `${brand.name} ${vehicle.name}`, color, image });
    setIsTestDriveOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 -top-32 h-80 w-[680px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[130px]" />
          <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-emerald-50 blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="space-y-16 lg:space-y-20">
            {BRANDS.map((brand) => <BrandCollectionView key={brand.id} brand={brand} onOpenTestDrive={openTestDrive} />)}
          </div>
        </div>
      </section>

      <TestDriveModal isOpen={isTestDriveOpen} onClose={() => setIsTestDriveOpen(false)} carModel={modalData.model} carColor={modalData.color} carImage={modalData.image} />
    </>
  );
}

function BrandCollectionView({ brand, onOpenTestDrive }: { brand: Brand; onOpenTestDrive: (brand: Brand, vehicle: Vehicle, color: string, image: string) => void }) {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(brand.vehicles[0]);
  const [selectedColor, setSelectedColor] = useState<ColorOption | undefined>(brand.vehicles[0].colors?.[0]);
  const displayImage = selectedVehicle.colors ? selectedColor?.image ?? selectedVehicle.image : selectedVehicle.image;
  const colorName = selectedVehicle.colors ? selectedColor?.name ?? "Couleur de présentation constructeur" : "Couleur de présentation constructeur";

  const chooseVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedColor(vehicle.colors?.[0]);
  };

  return (
    <section aria-label={`Collection ${brand.name}`} className="border-t border-slate-200 pt-8 first:border-t-0 first:pt-0 lg:pt-10">
      <div className="grid items-center gap-6 lg:min-h-[500px] lg:grid-cols-[0.75fr_1.25fr]">
        <div className="order-2 max-w-md lg:order-1 lg:self-start lg:pt-6">
          <div className={`relative ${brand.id === "chery" ? "h-12 w-52" : "h-10 w-36"}`}><Image src={brand.logo} alt={brand.name} fill sizes="208px" className="object-contain object-left" /></div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#54b834]">{selectedVehicle.category}</p>
          {selectedVehicle.modelLogo && <div className={`relative mt-1 h-7 w-40 ${selectedVehicle.id === "himla" ? "-ml-6" : ""}`}><Image src={selectedVehicle.modelLogo} alt={selectedVehicle.name} fill sizes="160px" className="object-contain object-left" /></div>}
          <h2 className="mt-1 text-4xl font-black tracking-tight text-[#102a56]">{brand.name} {selectedVehicle.name}</h2>

          {selectedVehicle.colors && (
            <div className="mt-7">
              <p className="text-sm font-bold text-slate-600">Choisissez une couleur</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {selectedVehicle.colors.map((color) => {
                  const active = selectedColor?.id === color.id;
                  return <button key={color.id} type="button" onClick={() => setSelectedColor(color)} aria-label={`Choisir ${color.name}`} aria-pressed={active} className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors ${active ? "border-[#54b834]" : "border-transparent hover:border-slate-300"}`}><span className="h-8 w-8 rounded-full" style={{ backgroundColor: color.hex, border: `2px solid ${color.borderHex}` }} /></button>;
                })}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-500">{colorName}</p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-start gap-3">
            <button type="button" onClick={() => onOpenTestDrive(brand, selectedVehicle, colorName, displayImage)} className="rounded-none bg-[#54b834] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#469f2d]">Demander un essai</button>
            {brand.id === "chery" && <Link href={`/vehicules/chery/${selectedVehicle.id}`} className="inline-flex text-sm font-bold text-[#102a56] underline decoration-[#54b834] decoration-2 underline-offset-4">Découvrir le Chery {selectedVehicle.name}</Link>}
            {brand.id === "jetour" && <Link href={`/vehicules/jetour/${selectedVehicle.id}`} className="inline-flex text-sm font-bold text-[#102a56] underline decoration-[#54b834] decoration-2 underline-offset-4">Découvrir le Jetour {selectedVehicle.name}</Link>}
            {brand.id === "gwm" && <Link href={`/vehicules/gwm/${selectedVehicle.id}`} className="inline-flex text-sm font-bold text-[#102a56] underline decoration-[#54b834] decoration-2 underline-offset-4">Découvrir le GWM {selectedVehicle.name}</Link>}
          </div>
        </div>

        <div className="relative order-1 min-h-[280px] sm:min-h-[370px] lg:order-2 lg:min-h-[460px]">
          <div className="absolute inset-x-[12%] bottom-[17%] h-14 rounded-full bg-slate-900/15 blur-2xl" />
          <Image src={displayImage} alt={`${brand.name} ${selectedVehicle.name} - ${colorName}`} fill priority sizes="(max-width: 1024px) 100vw, 62vw" className="object-contain drop-shadow-[0_24px_25px_rgba(15,23,42,0.2)]" />
        </div>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-5">
        <div className="flex items-center gap-3">
          <div className={`relative ${brand.id === "chery" ? "h-9 w-40" : "h-7 w-28"}`}><Image src={brand.logo} alt={brand.name} fill sizes="160px" className="object-contain object-left" /></div>
          <span className="text-sm font-bold text-[#102a56]">Tous les modèles</span>
          <span className="text-xs font-semibold text-slate-400">{brand.vehicles.length}</span>
        </div>

        <div className="mt-4 hidden items-end gap-5 overflow-x-auto pb-2 lg:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {brand.vehicles.map((vehicle) => <VehicleThumbnail key={vehicle.id} brand={brand} vehicle={vehicle} active={selectedVehicle.id === vehicle.id} onClick={() => chooseVehicle(vehicle)} />)}
        </div>

        <div className="mt-3 border-t border-slate-200 lg:hidden">
          {brand.vehicles.map((vehicle) => <VehicleMobileRow key={vehicle.id} brand={brand} vehicle={vehicle} active={selectedVehicle.id === vehicle.id} onClick={() => chooseVehicle(vehicle)} />)}
        </div>
      </div>
    </section>
  );
}

function VehicleThumbnail({ brand, vehicle, active, onClick }: { brand: Brand; vehicle: Vehicle; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-pressed={active} className={`shrink-0 border-b-2 px-1 pb-2 text-left transition-colors ${active ? "border-[#54b834] text-[#102a56]" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#102a56]"}`}><span className="relative block h-20 w-32 sm:h-24 sm:w-40"><Image src={vehicle.image} alt={`${brand.name} ${vehicle.name}`} fill sizes="160px" className="object-contain" /></span>{vehicle.modelLogo ? <span className={`relative mt-1 block h-5 w-24 ${vehicle.id === "himla" ? "-ml-5" : ""}`}><Image src={vehicle.modelLogo} alt={vehicle.name} fill sizes="96px" className="object-contain object-left" /></span> : <span className="mt-1 block text-sm font-bold">{vehicle.name}</span>}</button>;
}

function VehicleMobileRow({ brand, vehicle, active, onClick }: { brand: Brand; vehicle: Vehicle; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-pressed={active} className={`flex w-full items-center gap-3 border-b border-slate-200 py-3 text-left transition-colors ${active ? "bg-white/70" : "hover:bg-white/50"}`}><span className="relative block h-20 w-32 shrink-0"><Image src={vehicle.image} alt={`${brand.name} ${vehicle.name}`} fill sizes="128px" className="object-contain" /></span><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#54b834]">{vehicle.category}</span>{vehicle.modelLogo ? <span className={`relative mt-1 block h-6 w-32 ${vehicle.id === "himla" ? "-ml-5" : ""}`}><Image src={vehicle.modelLogo} alt={vehicle.name} fill sizes="128px" className="object-contain object-left" /></span> : <span className="mt-1 block text-base font-black text-[#102a56]">{vehicle.name}</span>}<span className="mt-1 block text-sm font-bold text-[#102a56]">{brand.name} {vehicle.name}</span></span></button>;
}
