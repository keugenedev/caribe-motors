"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Rotate3D } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Color = {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  image: string;
};

const colors: Color[] = [
  { id: "orange", name: "Orange volcanique", hex: "#c45a20", borderHex: "#924019", image: "/images/gwm/nav/orange.png" },
  { id: "red", name: "Rouge passion", hex: "#b12626", borderHex: "#7f1d1d", image: "/images/gwm/nav/red.png" },
  { id: "blue", name: "Bleu électrique", hex: "#1355ad", borderHex: "#0f3f80", image: "/images/gwm/nav/blue.png" },
  { id: "silver", name: "Gris argent", hex: "#9ca3af", borderHex: "#6b7280", image: "/images/gwm/nav/silver.png" },
  { id: "black", name: "Noir intense", hex: "#171717", borderHex: "#3f3f46", image: "/images/gwm/nav/black.png" },
  { id: "brown", name: "Brun bronze", hex: "#76563e", borderHex: "#4c3424", image: "/images/gwm/nav/brown.png" },
];

const frames = Array.from({ length: 36 }, (_, index) => `/images/gwm/p-series/360/red-${String(index).padStart(2, "0")}.png`);

export default function GwmPSeriesExperience() {
  const [selectedColor, setSelectedColor] = useState(colors[5]);
  const [frame, setFrame] = useState(0);
  const dragStart = useRef<{ x: number; frame: number } | null>(null);

  useEffect(() => {
    frames.forEach((source) => {
      const image = new window.Image();
      image.src = source;
    });
  }, []);

  useEffect(() => {
    const color = new URLSearchParams(window.location.search).get("color");
    const frame = window.requestAnimationFrame(() => setSelectedColor(colors.find((option) => option.id === color) ?? colors[5]));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const updateFrame = (next: number) => setFrame((next + frames.length) % frames.length);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]">Personnalisez votre pick-up</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102a56] sm:text-5xl">Choisissez votre couleur.</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">Découvrez le GWM P-Series dans toutes les teintes disponibles : orange, rouge, bleu, gris, noir et brun bronze.</p>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Couleurs disponibles">
              {colors.map((color) => {
                const active = selectedColor.id === color.id;
                return <button key={color.id} type="button" onClick={() => setSelectedColor(color)} aria-label={`Choisir ${color.name}`} aria-pressed={active} className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition ${active ? "border-[#54b834] ring-2 ring-[#54b834]/20 ring-offset-2" : "border-transparent hover:border-slate-300"}`}><span className="h-9 w-9 rounded-full" style={{ backgroundColor: color.hex, border: `2px solid ${color.borderHex}` }} /></button>;
              })}
            </div>
            <p className="mt-4 text-sm font-bold text-[#102a56]">{selectedColor.name}</p>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[390px] lg:min-h-[440px]">
            <div className="absolute inset-x-[13%] bottom-[17%] h-14 rounded-full bg-slate-900/15 blur-2xl" />
            <Image src={selectedColor.image} alt={`GWM P-Series ${selectedColor.name}`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-contain drop-shadow-[0_24px_25px_rgba(15,23,42,0.2)]" />
          </div>
        </div>

        <div className="mt-16 overflow-hidden bg-[#102a56] px-5 py-10 text-white sm:mt-24 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex justify-center"><Rotate3D aria-hidden="true" className="h-6 w-6 text-[#75cf4f]" /></div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[#75cf4f]">Vue immersive</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Explorez le P-Series à 360°.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Faites glisser le véhicule de gauche à droite pour découvrir chaque angle.</p>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <div role="application" aria-label="Vue à 360 degrés du GWM P-Series" onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); dragStart.current = { x: event.clientX, frame }; }} onPointerMove={(event) => { if (!dragStart.current) return; const delta = Math.round((event.clientX - dragStart.current.x) / 12); updateFrame(dragStart.current.frame - delta); }} onPointerUp={() => { dragStart.current = null; }} onPointerCancel={() => { dragStart.current = null; }} className="relative h-[240px] cursor-grab select-none touch-pan-y active:cursor-grabbing sm:h-[380px] lg:h-[460px]">
              <Image src={frames[frame]} alt={`GWM P-Series, vue ${frame + 1} sur ${frames.length}`} fill sizes="(max-width: 1024px) 100vw, 960px" className="pointer-events-none object-contain" />
            </div>
            <div className="mt-2 flex items-center justify-center gap-4">
              <button type="button" onClick={() => updateFrame(frame - 1)} aria-label="Vue précédente" className="inline-flex h-10 w-10 items-center justify-center border border-white/30 transition hover:bg-white/10"><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
              <label className="sr-only" htmlFor="gwm-360-frame">Choisir une vue à 360 degrés</label>
              <input id="gwm-360-frame" type="range" min="0" max={frames.length - 1} value={frame} onChange={(event) => setFrame(Number(event.target.value))} className="h-1 w-40 accent-[#75cf4f] sm:w-64" />
              <button type="button" onClick={() => updateFrame(frame + 1)} aria-label="Vue suivante" className="inline-flex h-10 w-10 items-center justify-center border border-white/30 transition hover:bg-white/10"><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
