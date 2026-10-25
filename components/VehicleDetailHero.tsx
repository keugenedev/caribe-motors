"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

type VehicleDetailHeroProps = {
  brand: string;
  name: string;
  category: string;
  logo: string;
  vehicle: string;
  colorImages?: Record<string, string>;
  description: string;
};

export default function VehicleDetailHero({ brand, name, category, logo, vehicle, colorImages, description }: VehicleDetailHeroProps) {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const vehicleImage = (color && colorImages?.[color]) ?? vehicle;

  return <section className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#fcfcfc] lg:h-[calc(100svh-120px)]">
    <AnimatePresence mode="wait">
      <motion.div key={vehicleImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="absolute inset-0">
        <motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.055, scale: 1 }} transition={{ duration: 2.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-none absolute inset-x-0 top-[42%] z-0 h-32 -translate-y-1/2 sm:h-48 lg:h-64"><Image src={logo} alt="" fill sizes="100vw" className="object-contain" /></motion.div>
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 py-10 pb-6 sm:px-8 sm:py-12 sm:pb-8 lg:px-10 lg:py-10 lg:pb-8">
          <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="text-center">
            <div className="relative mx-auto h-10 w-40 sm:h-12 sm:w-48"><Image src={logo} alt={brand} fill sizes="192px" className="object-contain" /></div>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#102a56] sm:text-5xl">{name}</h1>
            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-light text-slate-500 sm:text-base"><span>{category}</span><span className="text-slate-300">|</span><span>Design</span><span className="text-slate-300">|</span><span>Performance</span></div>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 96, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto mt-auto h-[min(42vh,18rem)] w-full max-w-2xl sm:h-[min(46vh,22rem)] md:max-w-4xl lg:h-[min(48vh,26rem)] lg:max-w-5xl"><Image src={vehicleImage} alt={`${brand} ${name}`} fill priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 896px, 1024px" className="object-contain object-bottom drop-shadow-[0_24px_24px_rgba(15,23,42,0.16)]" /></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  </section>;
}
