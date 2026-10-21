"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, MoveHorizontal, SunMedium } from "lucide-react";
import { useRef, useState } from "react";

type ExperienceModel = {
  id: string;
  name: string;
  category: string;
  message: string;
  images: string[];
};

const models: ExperienceModel[] = [
  { id: "t2", name: "T2", category: "4x4 nouvelle génération", message: "Une présence robuste, prête à sortir du cadre.", images: ["/images/jetour/experience/2d/t2/t2-001-23.png", "/images/jetour/experience/2d/t2/t2-002-p1_1.png", "/images/jetour/experience/2d/t2/t2-005-p3_1.png"] },
  { id: "dashing", name: "Dashing", category: "SUV coupé", message: "Un langage de design audacieux, jusque dans les détails.", images: ["/images/jetour/experience/2d/dashing/dashing-001-11.png", "/images/jetour/experience/2d/dashing/dashing-002-p2_1.png", "/images/jetour/experience/2d/dashing/dashing-008-p4_1.png"] },
  { id: "x70-plus", name: "X70 Plus", category: "SUV familial", message: "L’espace et l’élégance pour voyager ensemble.", images: ["/images/jetour/experience/2d/x70-plus/x70-plus-001-17.png", "/images/jetour/experience/2d/x70-plus/x70-plus-006-p2_1.png", "/images/jetour/experience/2d/x70-plus/x70-plus-009-p4_1.png"] },
  { id: "x90-plus", name: "X90 Plus", category: "Grand SUV", message: "Une signature premium qui impose sa présence.", images: ["/images/jetour/experience/2d/x90-plus/x90-plus-001-13.png", "/images/jetour/experience/2d/x90-plus/x90-plus-006-p3_1.png", "/images/jetour/experience/2d/x90-plus/x90-plus-009-p4_1.png"] },
  { id: "g700", name: "Zongheng G700", category: "SUV d’aventure", message: "L’exploration grand format, sans compromis.", images: ["/images/jetour/experience/2d/g700/g700-001-11.png", "/images/jetour/experience/2d/g700/g700-002-p1_1.png", "/images/jetour/experience/2d/g700/g700-017-sc_3_bg.jpg"] },
];

export default function JetourExperience() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [pan, setPan] = useState(0);
  const [lightInterior, setLightInterior] = useState(false);
  const dragStart = useRef<{ x: number; pan: number } | null>(null);

  const selectModel = (model: ExperienceModel) => {
    setSelectedModel(model);
    setSelectedImage(0);
  };

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { x: event.clientX, pan };
  };

  const movePanorama = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    setPan(Math.max(-36, Math.min(36, dragStart.current.pan + (event.clientX - dragStart.current.x) / 7)));
  };

  return (
    <div className="bg-[#07131d] text-white">
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#83d6de]">Expérience Jetour</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h1 className="text-4xl font-black tracking-[-0.045em] sm:text-6xl">Explorez la gamme<br />en 2D.</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Choisissez un modèle, puis découvrez les lignes, la silhouette et les finitions qui font sa personnalité.</p>
          </div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {models.map((model) => {
              const active = model.id === selectedModel.id;
              return <button key={model.id} type="button" onClick={() => selectModel(model)} aria-pressed={active} className={`shrink-0 border px-4 py-3 text-left transition ${active ? "border-[#83d6de] bg-white/10 text-white" : "border-white/15 text-slate-400 hover:border-white/35 hover:text-white"}`}><span className="block text-sm font-black">{model.name}</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.13em]">{model.category}</span></button>;
            })}
          </div>

          <div className="mt-5 grid overflow-hidden border border-white/10 bg-[#0d2631] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[300px] sm:min-h-[430px]">
              <Image src={selectedModel.images[selectedImage]} alt={`Jetour ${selectedModel.name} – vue 2D`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07131d]/90 to-transparent px-6 pb-6 pt-16"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83d6de]">Vue 2D</p><p className="mt-2 text-lg font-bold">Jetour {selectedModel.name}</p></div>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-9"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83d6de]">{selectedModel.category}</p><h2 className="mt-4 text-3xl font-black tracking-tight">{selectedModel.name}</h2><p className="mt-4 max-w-sm leading-7 text-slate-300">{selectedModel.message}</p></div><div className="mt-10 grid grid-cols-3 gap-2">{selectedModel.images.map((image, index) => <button key={image} type="button" onClick={() => setSelectedImage(index)} aria-label={`Voir la vue ${index + 1} du ${selectedModel.name}`} aria-pressed={selectedImage === index} className={`relative h-20 overflow-hidden border transition ${selectedImage === index ? "border-[#83d6de]" : "border-white/15 opacity-65 hover:opacity-100"}`}><Image src={image} alt="" fill sizes="140px" className="object-cover" /></button>)}</div></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1720] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#83d6de]">Dashing 720°</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><h2 className="text-4xl font-black tracking-[-0.045em] sm:text-6xl">Entrez dans le Dashing.</h2><p className="mt-4 max-w-2xl leading-8 text-slate-300">Faites glisser l’image pour regarder autour de vous. Passez d’une ambiance à l’autre pour mieux ressentir l’habitacle.</p></div><div className="flex gap-2"><button type="button" onClick={() => setLightInterior(false)} aria-pressed={!lightInterior} className={`border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] ${!lightInterior ? "border-[#83d6de] bg-[#83d6de] text-[#07131d]" : "border-white/20 text-white"}`}>Standard</button><button type="button" onClick={() => setLightInterior(true)} aria-pressed={lightInterior} className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] ${lightInterior ? "border-[#83d6de] bg-[#83d6de] text-[#07131d]" : "border-white/20 text-white"}`}><SunMedium className="h-3.5 w-3.5" /> Clair</button></div></div>

          <div onPointerDown={startDrag} onPointerMove={movePanorama} onPointerUp={() => { dragStart.current = null; }} onPointerCancel={() => { dragStart.current = null; }} className="relative mt-10 h-[360px] cursor-grab overflow-hidden border border-white/10 bg-black active:cursor-grabbing sm:h-[520px]" role="group" aria-label="Vue immersive 720 degrés de l’intérieur du Jetour Dashing">
            <div className="absolute inset-0 transition-[background-position] duration-100" style={{ backgroundImage: `url(${lightInterior ? "/images/jetour/experience/720/dashing-interior-light.jpg" : "/images/jetour/experience/720/dashing-interior.jpg"})`, backgroundPosition: `${50 + pan}% center`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent p-5 sm:p-7"><span className="inline-flex items-center gap-2 bg-black/45 px-3 py-2 text-xs font-bold uppercase tracking-[0.13em] backdrop-blur-sm"><MoveHorizontal className="h-4 w-4 text-[#83d6de]" /> Glissez pour explorer</span><span className="inline-flex h-10 w-10 items-center justify-center border border-white/25 bg-black/30"><Maximize2 className="h-4 w-4" /></span></div>
            <button type="button" onClick={() => setPan((value) => Math.max(-36, value - 12))} aria-label="Regarder vers la gauche" className="absolute left-4 top-1/2 -translate-y-1/2 border border-white/20 bg-black/40 p-3 text-white transition hover:bg-black/70"><ChevronLeft className="h-5 w-5" /></button><button type="button" onClick={() => setPan((value) => Math.min(36, value + 12))} aria-label="Regarder vers la droite" className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/20 bg-black/40 p-3 text-white transition hover:bg-black/70"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
