"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CarFront, ChevronLeft, ChevronRight, Info } from "lucide-react";

type HomeModel = {
  name: string;
  category: string;
  brand: string;
  brandLogo: string;
  image: string;
  modelLogo?: string;
  detailsHref?: string;
  informationUrl: string;
};

const models: HomeModel[] = [
  { name: "Himla", category: "Pick-up", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/himla.png", image: "/images/chery/vehicles/himla.png", detailsHref: "/vehicules/chery/himla", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 2", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-2.png", image: "/images/chery/vehicles/tiggo-2.png", detailsHref: "/vehicules/chery/tiggo-2", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 4", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-4.png", image: "/images/chery/vehicles/tiggo-4.png", detailsHref: "/vehicules/chery/tiggo-4", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 7", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-7.png", image: "/images/chery/vehicles/tiggo-7.png", detailsHref: "/vehicules/chery/tiggo-7", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 7 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-7-csh.png", image: "/images/chery/vehicles/tiggo-7-csh.png", detailsHref: "/vehicules/chery/tiggo-7-csh", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 8", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-8.png", image: "/images/chery/vehicles/tiggo-8.png", detailsHref: "/vehicules/chery/tiggo-8", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 8 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-8-csh.png", image: "/images/chery/vehicles/tiggo-8-csh.png", detailsHref: "/vehicules/chery/tiggo-8-csh", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 9", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-9.png", image: "/images/chery/vehicles/tiggo-9.png", detailsHref: "/vehicules/chery/tiggo-9", informationUrl: "https://www.cheryinternational.com" },
  { name: "Tiggo 9 CSH", category: "Collection Tiggo", brand: "Chery", brandLogo: "/images/brands/Chery.png", modelLogo: "/images/chery/logos/tiggo-9-csh.png", image: "/images/chery/vehicles/tiggo-9-csh.png", detailsHref: "/vehicules/chery/tiggo-9-csh", informationUrl: "https://www.cheryinternational.com" },
  { name: "T1", category: "SUV tout-terrain", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/t1-black.png", detailsHref: "/vehicules/jetour/t1", informationUrl: "https://www.jetourglobal.com" },
  { name: "T2", category: "4x4 nouvelle génération", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-t2.png", detailsHref: "/vehicules/jetour/t2", informationUrl: "https://www.jetourglobal.com" },
  { name: "X50", category: "SUV compact", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/models/x50/x50-001-7.png", detailsHref: "/vehicules/jetour/x50", informationUrl: "https://www.jetourglobal.com" },
  { name: "Dashing", category: "SUV coupé", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-dashing.png", detailsHref: "/vehicules/jetour/dashing", informationUrl: "https://www.jetourglobal.com" },
  { name: "X70 FL", category: "SUV familial", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x70.png", detailsHref: "/vehicules/jetour/x70-fl", informationUrl: "https://www.jetourglobal.com" },
  { name: "X70 Plus", category: "SUV familial", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x70plus.png", detailsHref: "/vehicules/jetour/x70-plus", informationUrl: "https://www.jetourglobal.com" },
  { name: "X90 Plus", category: "Grand SUV", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/model-x90plus.png", detailsHref: "/vehicules/jetour/x90-plus", informationUrl: "https://www.jetourglobal.com" },
  { name: "Zongheng G700", category: "Grand SUV d’aventure", brand: "Jetour", brandLogo: "/images/brands/jetour.png", image: "/images/jetour/models/g700/g700-009-2.jpg", detailsHref: "/vehicules/jetour/g700", informationUrl: "https://www.jetourglobal.com" },
  { name: "Ignis", category: "Crossover urbain", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/Ignis.png", informationUrl: "https://www.globalsuzuki.com" },
  { name: "Jimny", category: "4x4 compact", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/Jimny.png", informationUrl: "https://www.globalsuzuki.com" },
  { name: "S-Cross", category: "SUV polyvalent", brand: "Suzuki", brandLogo: "/images/brands/Suzuki.png", image: "/images/vehicles/SCross.png", informationUrl: "https://www.globalsuzuki.com" },
  { name: "Compass", category: "SUV", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Compass.png", informationUrl: "https://www.jeep.com" },
  { name: "Gladiator", category: "Pick-up", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Gladiator.png", informationUrl: "https://www.jeep.com" },
  { name: "Grand Cherokee", category: "SUV premium", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/GrandCheerokee.png", informationUrl: "https://www.jeep.com" },
  { name: "Wrangler", category: "4x4 iconique", brand: "Jeep", brandLogo: "/images/brands/Jeep.png", image: "/images/vehicles/Wrangler.png", informationUrl: "https://www.jeep.com" },
  { name: "Durango", category: "SUV performance", brand: "Dodge", brandLogo: "/images/brands/Dodge.png", image: "/images/vehicles/Durango.png", informationUrl: "https://www.dodge.com" },
];

export default function HomeVehicleHero({ showActions = false }: { showActions?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const model = models[currentIndex];
  const brandModels = models.filter((item) => item.brand === model.brand);
  const changeModel = (direction: -1 | 1) => setCurrentIndex((index) => (index + direction + models.length) % models.length);
  const selectModel = (selectedModel: HomeModel) => {
    const index = models.indexOf(selectedModel);
    if (index >= 0) setCurrentIndex(index);
  };

  return (
    <section aria-label="Présentation des véhicules" className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#fcfcfc] lg:h-[calc(100svh-120px)]">
      <AnimatePresence mode="wait">
        <motion.div key={`${model.brand}-${model.name}`} initial="initial" animate="animate" exit="exit" className="absolute inset-0">
          <motion.div aria-hidden="true" variants={{ initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 0.055, scale: 1, transition: { duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }, exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } } }} className="pointer-events-none absolute inset-x-0 top-[43%] h-32 -translate-y-1/2 sm:h-48 lg:h-64"><Image src={model.brandLogo} alt="" fill sizes="100vw" className="object-contain" /></motion.div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 py-14 pb-28 sm:px-8 sm:py-16 sm:pb-32 lg:px-10">
            <motion.header variants={{ initial: { opacity: 0, y: -18 }, animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }, exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeInOut" } } }} className="text-center">
              <div className="relative mx-auto h-14 w-60 sm:h-16 sm:w-72"><Image src={model.modelLogo ?? model.brandLogo} alt={`${model.brand} ${model.name}`} fill priority sizes="288px" className="object-contain" /></div>
              <div className="mt-7 flex justify-center gap-4 text-sm font-light text-slate-500 sm:text-base"><span>{model.category}</span><span className="text-slate-300">|</span><span>Design</span><span className="text-slate-300">|</span><span>Performance</span></div>
              {showActions && <div className="mt-6 flex flex-wrap justify-center gap-2.5"><Link href={model.detailsHref ?? model.informationUrl} target={model.detailsHref ? undefined : "_blank"} rel={model.detailsHref ? undefined : "noopener noreferrer"} className="inline-flex items-center gap-2 rounded-full bg-[#102a56] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#1643aa]"><Info className="h-3.5 w-3.5" /> Voir le véhicule</Link><Link href={`/contact?modele=${encodeURIComponent(`${model.brand} ${model.name}`)}`} className="inline-flex items-center gap-2 rounded-full bg-[#54b834] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#469f2d]"><CarFront className="h-3.5 w-3.5" /> Demander un essai</Link><a href={model.informationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#102a56] bg-white/80 px-4 py-2.5 text-xs font-bold text-[#102a56] transition hover:bg-[#102a56] hover:text-white">Plus d’informations <ArrowUpRight className="h-3.5 w-3.5" /></a></div>}
            </motion.header>
            <motion.div variants={{ initial: { opacity: 0, y: 72, scale: 0.92 }, animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.25, delay: 0.35, ease: [0.16, 1, 0.3, 1] } }, exit: { opacity: 0, y: 28, transition: { duration: 0.3, ease: "easeInOut" } } }} className="relative mx-auto mt-auto h-[clamp(14rem,47vh,25rem)] w-full max-w-4xl"><div className="absolute inset-x-[20%] bottom-[10%] h-10 rounded-full bg-slate-900/15 blur-xl" /><Image src={model.image} alt={`${model.brand} ${model.name}`} fill priority sizes="(max-width: 768px) 100vw, 1024px" className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(15,23,42,0.14)]" /></motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button type="button" onClick={() => changeModel(-1)} aria-label="Véhicule précédent" className="absolute left-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-500 shadow-sm transition-colors hover:border-[#54b834] hover:text-[#54b834] md:left-[clamp(4rem,11vw,14rem)] md:top-[58%]"><ChevronLeft className="h-5 w-5" /></button>
      <button type="button" onClick={() => changeModel(1)} aria-label="Véhicule suivant" className="absolute right-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#102a56] shadow-sm transition-colors hover:border-[#54b834] hover:text-[#54b834] md:right-[clamp(4rem,11vw,14rem)] md:top-[58%]"><ChevronRight className="h-5 w-5" /></button>
      <div aria-label={`Modèles ${model.brand}`} className="absolute inset-x-0 bottom-0 z-20 bg-[#fcfcfc] px-3 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5">
          {brandModels.map((brandModel) => {
            const active = brandModel === model;
            return <button key={`${brandModel.brand}-${brandModel.name}`} type="button" onClick={() => selectModel(brandModel)} aria-label={`Afficher ${brandModel.brand} ${brandModel.name}`} aria-pressed={active} className={`relative h-14 w-24 shrink-0 transition-all sm:h-20 sm:w-36 ${active ? "opacity-100" : "opacity-35 hover:opacity-70"}`}><Image src={brandModel.image} alt={`${brandModel.brand} ${brandModel.name}`} fill sizes="144px" className="object-contain" /></button>;
          })}
        </div>
      </div>
    </section>
  );
}
