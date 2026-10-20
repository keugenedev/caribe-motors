"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HomeModel = {
  name: string;
  category: string;
  brand: string;
  brandLogo: string;
  image: string;
  modelLogo?: string;
};

const models: HomeModel[] = [
  { name: "Himla", category: "Pick-up", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/himla.png", image: "/images/chery/vehicles/himla.png" },
  { name: "Tiggo 2", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-2.png", image: "/images/chery/vehicles/tiggo-2.png" },
  { name: "Tiggo 4", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-4.png", image: "/images/chery/vehicles/tiggo-4.png" },
  { name: "Tiggo 7", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-7.png", image: "/images/chery/vehicles/tiggo-7.png" },
  { name: "Tiggo 7 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-7-csh.png", image: "/images/chery/vehicles/tiggo-7-csh.png" },
  { name: "Tiggo 8", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-8.png", image: "/images/chery/vehicles/tiggo-8.png" },
  { name: "Tiggo 8 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-8-csh.png", image: "/images/chery/vehicles/tiggo-8-csh.png" },
  { name: "Tiggo 9", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-9.png", image: "/images/chery/vehicles/tiggo-9.png" },
  { name: "Tiggo 9 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-9-csh.png", image: "/images/chery/vehicles/tiggo-9-csh.png" },
  { name: "T1", category: "SUV tout-terrain", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/t1-black.png" },
  { name: "T2", category: "4x4 nouvelle génération", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-t2.png" },
  { name: "Dashing", category: "SUV coupé", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-dashing.png" },
  { name: "X70", category: "SUV familial", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x70.png" },
  { name: "X70 Plus", category: "SUV familial", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x70plus.png" },
  { name: "X90 Plus", category: "Grand SUV", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x90plus.png" },
  { name: "Ignis", category: "Crossover urbain", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/Ignis.png" },
  { name: "Jimny", category: "4x4 compact", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/Jimny.png" },
  { name: "S-Cross", category: "SUV polyvalent", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/SCross.png" },
  { name: "Compass", category: "SUV", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Compass.png" },
  { name: "Gladiator", category: "Pick-up", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Gladiator.png" },
  { name: "Grand Cherokee", category: "SUV premium", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/GrandCheerokee.png" },
  { name: "Wrangler", category: "4x4 iconique", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Wrangler.png" },
  { name: "Durango", category: "SUV performance", brand: "Dodge", brandLogo: "/images/brands/Dodge.png", image: "/images/vehicles/Durango.png" },
];

export default function HomeVehicleHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const model = models[currentIndex];
  const changeModel = (direction: -1 | 1) => setCurrentIndex((index) => (index + direction + models.length) % models.length);

  return (
    <section aria-label="Présentation des véhicules" className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#fcfcfc] lg:h-[calc(100svh-120px)]">
      <AnimatePresence mode="wait">
        <motion.div key={`${model.brand}-${model.name}`} initial="initial" animate="animate" exit="exit" className="absolute inset-0">
          <motion.div aria-hidden="true" variants={{ initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 0.055, scale: 1, transition: { duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }, exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } } }} className="pointer-events-none absolute inset-x-0 top-[43%] h-32 -translate-y-1/2 sm:h-48 lg:h-64"><Image src={model.brandLogo} alt="" fill sizes="100vw" className="object-contain" /></motion.div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
            <motion.header variants={{ initial: { opacity: 0, y: -18 }, animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }, exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeInOut" } } }} className="text-center">
              <div className="relative mx-auto h-14 w-60 sm:h-16 sm:w-72"><Image src={model.modelLogo ?? model.brandLogo} alt={`${model.brand} ${model.name}`} fill priority sizes="288px" className="object-contain" /></div>
              <div className="mt-7 flex justify-center gap-4 text-sm font-light text-slate-500 sm:text-base"><span>{model.category}</span><span className="text-slate-300">|</span><span>Design</span><span className="text-slate-300">|</span><span>Performance</span></div>
            </motion.header>
            <motion.div variants={{ initial: { opacity: 0, y: 72, scale: 0.92 }, animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.25, delay: 0.35, ease: [0.16, 1, 0.3, 1] } }, exit: { opacity: 0, y: 28, transition: { duration: 0.3, ease: "easeInOut" } } }} className="relative mx-auto mt-auto h-[clamp(14rem,47vh,25rem)] w-full max-w-4xl"><div className="absolute inset-x-[20%] bottom-[10%] h-10 rounded-full bg-slate-900/15 blur-xl" /><Image src={model.image} alt={`${model.brand} ${model.name}`} fill priority sizes="(max-width: 768px) 100vw, 1024px" className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(15,23,42,0.14)]" /></motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button type="button" onClick={() => changeModel(-1)} aria-label="Véhicule précédent" className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-[#102a56] shadow-sm transition-colors hover:border-[#54b834] hover:text-[#54b834] sm:left-8"><ChevronLeft className="h-5 w-5" /></button>
      <button type="button" onClick={() => changeModel(1)} aria-label="Véhicule suivant" className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-[#102a56] shadow-sm transition-colors hover:border-[#54b834] hover:text-[#54b834] sm:right-8"><ChevronRight className="h-5 w-5" /></button>
    </section>
  );
}
