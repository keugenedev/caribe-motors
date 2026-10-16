"use client";

import { useState } from "react";
import Image from "next/image";

interface CarColor { id: string; name: string; hex: string; image: string; borderHex: string; label: string }
interface CarModel { id: string; name: string; subtitle: string; tagline: string; defaultImage: string; engine: string; power: string; torque: string; drive: string; colors?: CarColor[] }

const T1_COLORS: CarColor[] = [
  { id: "black", name: "Noir Onyx", label: "Night Obsidian", hex: "#18181b", borderHex: "#3f3f46", image: "/images/jetour/t1-black.png" },
  { id: "white", name: "Blanc Glacier", label: "Polar White", hex: "#f8fafc", borderHex: "#cbd5e1", image: "/images/jetour/t1-white.png" },
  { id: "silver", name: "Argent Lunaire", label: "Metallic Silver", hex: "#94a3b8", borderHex: "#64748b", image: "/images/jetour/t1-silver.png" },
  { id: "green", name: "Vert Aventure", label: "Forest Khaki Green", hex: "#475e55", borderHex: "#2b3b35", image: "/images/jetour/t1-green.png" },
  { id: "gold", name: "Or Désert", label: "Sahara Sand Gold", hex: "#bca88e", borderHex: "#8f7c65", image: "/images/jetour/t1-gold.png" },
];

const JETOUR_MODELS: CarModel[] = [
  { id: "t1", name: "JETOUR T1", subtitle: "SUV tout-terrain 4x4", tagline: "L’aventure sans compromis", defaultImage: "/images/jetour/t1-black.png", engine: "2.0T GDI Turbo", power: "254 ch", torque: "390 Nm", drive: "Intelligent X-WD 4x4", colors: T1_COLORS },
  { id: "t2", name: "JETOUR T2", subtitle: "Baroudeur nouvelle génération", tagline: "Dominez tous les terrains", defaultImage: "/images/jetour/model-t2.png", engine: "2.0T GDI Turbo", power: "254 ch", torque: "390 Nm", drive: "Traction intégrale 4WD" },
  { id: "dashing", name: "JETOUR DASHING", subtitle: "SUV coupé technologique", tagline: "Le design du futur", defaultImage: "/images/jetour/model-dashing.png", engine: "1.6T GDI Turbo", power: "197 ch", torque: "290 Nm", drive: "Traction avant · 7 DCT" },
  { id: "x70plus", name: "JETOUR X70 PLUS", subtitle: "Grand SUV familial", tagline: "L’espace pour vos projets", defaultImage: "/images/jetour/model-x70plus.png", engine: "1.6T GDI", power: "197 ch", torque: "290 Nm", drive: "7 places modulables" },
  { id: "x90plus", name: "JETOUR X90 PLUS", subtitle: "SUV exécutif premium", tagline: "Luxe & puissance", defaultImage: "/images/jetour/model-x90plus.png", engine: "2.0T GDI Turbo", power: "254 ch", torque: "390 Nm", drive: "Finition 7 places" },
];

interface CarShowcaseProps { onOpenTestDrive: (model: string, color: string, image: string) => void }

export default function CarShowcase({ onOpenTestDrive }: CarShowcaseProps) {
  const [selectedModel, setSelectedModel] = useState<CarModel>(JETOUR_MODELS[0]);
  const [selectedColor, setSelectedColor] = useState<CarColor>(T1_COLORS[0]);
  const hasColors = Boolean(selectedModel.colors?.length);
  const currentImage = hasColors ? selectedColor.image : selectedModel.defaultImage;
  const currentColorName = hasColors ? selectedColor.name : "Teinte de présentation constructeur";
  const remoteImage = currentImage.startsWith("http");

  return <section className="relative flex flex-1 flex-col justify-between overflow-hidden bg-[#f8fafc] px-4 py-4 sm:px-6 lg:px-8">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute left-1/2 -top-24 h-96 w-[700px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[130px]" /><div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/80 blur-[160px]" /><div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" /></div>

    <div className="mx-auto w-full max-w-7xl"><div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end"><div className="relative h-9 w-44 translate-x-12 translate-y-3 sm:h-10 sm:w-52 sm:translate-x-16 sm:translate-y-4"><Image src="/images/jetour/jetour-wordmark.png" alt="JETOUR" fill priority className="object-contain object-left" sizes="208px" /></div>
      <div className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-md">{JETOUR_MODELS.map((model) => { const active = selectedModel.id === model.id; return <button key={model.id} onClick={() => { setSelectedModel(model); if (model.colors?.length) setSelectedColor(model.colors[0]); }} className={`relative rounded-xl px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 sm:px-3.5 sm:text-xs ${active ? "bg-gradient-to-r from-[#1643aa] to-[#3165da] text-white shadow-lg shadow-blue-200" : "text-slate-500 hover:bg-slate-100 hover:text-[#14245d]"}`}><span>{model.name.replace("JETOUR ", "")}</span>{model.colors?.length && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />}</button>; })}</div>
    </div></div>

    <div className="relative my-auto flex flex-col items-center justify-center py-2 sm:py-4"><div className="car-platform-glow absolute -bottom-6 h-52 w-full max-w-4xl rounded-full opacity-90 blur-xl" /><div className="relative z-10 flex w-full max-w-4xl items-center justify-center px-2"><div className="relative flex h-[250px] w-full items-center justify-center sm:h-[340px] md:h-[390px] lg:h-[430px]">{remoteImage ? <img src={currentImage} alt={`${selectedModel.name} - ${currentColorName}`} className="max-h-full max-w-full object-contain drop-shadow-[0_20px_28px_rgba(15,23,42,0.25)]" /> : <Image src={currentImage} alt={`${selectedModel.name} - ${currentColorName}`} fill priority className="pointer-events-none select-none object-contain drop-shadow-[0_20px_28px_rgba(15,23,42,0.25)]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1024px" />}</div></div>
      <div className="relative z-20 mt-1 flex flex-col items-center gap-2.5">{hasColors ? <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 p-2 shadow-lg backdrop-blur-xl sm:gap-4 sm:p-2.5">{selectedModel.colors?.map((color) => { const selected = selectedColor.id === color.id; return <button key={color.id} onClick={() => setSelectedColor(color)} aria-label={`Sélectionner ${color.name}`} className="group relative flex items-center justify-center p-0.5"><span className={`flex h-10 w-10 items-center justify-center rounded-full transition-all sm:h-12 sm:w-12 ${selected ? "scale-110 ring-2 ring-[#0d4b8e] ring-offset-2 ring-offset-white shadow-lg shadow-blue-200" : "ring-1 ring-slate-300 hover:scale-105 hover:ring-slate-500"}`}><span className="h-8 w-8 rounded-full shadow-inner sm:h-9 sm:w-9" style={{ backgroundColor: color.hex, border: `2px solid ${color.borderHex}` }} /></span></button>; })}</div> : <button onClick={() => { setSelectedModel(JETOUR_MODELS[0]); setSelectedColor(T1_COLORS[0]); }} className="text-xs font-medium text-[#1e3f9e] underline underline-offset-4 hover:text-[#0d4b8e]">Personnaliser les couleurs du JETOUR T1</button>}</div>
    </div>

    <div className="mx-auto w-full max-w-7xl pb-2 pt-3"><div className="grid grid-cols-2 items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3.5 shadow-sm backdrop-blur-md sm:grid-cols-4 lg:grid-cols-5"><Spec label="Motorisation" value={selectedModel.engine} /><Spec label="Puissance max" value={selectedModel.power} extra="hidden sm:flex" /><Spec label="Couple moteur" value={selectedModel.torque} extra="hidden sm:flex" /><Spec label="Transmission" value={selectedModel.drive} /><div className="col-span-2 flex items-center justify-end sm:col-span-4 lg:col-span-1"><button onClick={() => onOpenTestDrive(selectedModel.name, currentColorName, currentImage)} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1643aa] to-[#3165da] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200 transition hover:scale-[1.02] lg:w-auto">Réserver ce modèle <span aria-hidden="true">→</span></button></div></div><div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] text-slate-500"><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Garantie Caribe Motors · Service & pièces en Haïti</span></div><div className="flex items-center gap-4"><span>Delmas 33, Port-au-Prince, Haïti</span><span className="hidden font-semibold text-[#172760] sm:inline">+509 2816-0000</span></div></div></div>
  </section>;
}

function Spec({ label, value, extra = "" }: { label: string; value: string; extra?: string }) { return <div className={`flex flex-col border-r border-slate-200 pr-2 ${extra}`}><span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</span><span className="text-sm font-black text-[#172760] sm:text-base">{value}</span></div>; }
