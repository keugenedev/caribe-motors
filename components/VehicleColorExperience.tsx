"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type VehicleColor = { id: string; name: string; hex: string; borderHex: string; image: string };

export default function VehicleColorExperience({ name, colors }: { name: string; colors: VehicleColor[] }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const searchParams = useSearchParams();
  const color = searchParams.get("color");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setSelectedColor(colors.find((option) => option.id === color) ?? colors[0]));
    return () => window.cancelAnimationFrame(frame);
  }, [color, colors]);
  return <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]">Personnalisez votre véhicule</p><h2 className="mt-4 text-3xl font-black tracking-tight text-[#102a56] sm:text-5xl">Choisissez votre couleur.</h2><p className="mt-5 max-w-lg text-base leading-8 text-slate-600">Découvrez le {name} dans les couleurs originales disponibles.</p><div className="mt-8 flex flex-wrap gap-3" aria-label="Couleurs disponibles">{colors.map((color) => { const active = selectedColor.id === color.id; return <button key={color.id} type="button" onClick={() => setSelectedColor(color)} aria-label={`Choisir ${color.name}`} aria-pressed={active} className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition ${active ? "border-[#54b834] ring-2 ring-[#54b834]/20 ring-offset-2" : "border-transparent hover:border-slate-300"}`}><span className="h-9 w-9 rounded-full" style={{ backgroundColor: color.hex, border: `2px solid ${color.borderHex}` }} /></button>; })}</div><p className="mt-4 text-sm font-bold text-[#102a56]">{selectedColor.name}</p></div><div className="relative min-h-[280px] sm:min-h-[390px] lg:min-h-[440px]"><div className="absolute inset-x-[13%] bottom-[17%] h-14 rounded-full bg-slate-900/15 blur-2xl" /><Image src={selectedColor.image} alt={`${name} ${selectedColor.name}`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-contain drop-shadow-[0_24px_25px_rgba(15,23,42,0.2)]" /></div></div></section>;
}
