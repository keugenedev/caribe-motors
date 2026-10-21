"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CheryModelHeroProps = {
  name: string;
  category: string;
  logo: string;
  vehicle: string;
  description: string;
  hero?: string;
};

export default function CheryModelHero({ name, category, logo, vehicle }: CheryModelHeroProps) {
  const title = name === "Himla" ? "Himla Chery" : `Chery ${name}`;

  return (
    <section className="relative isolate overflow-hidden bg-[#fcfcfc] text-[#222]">
      <motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.055, scale: 1 }} transition={{ duration: 2.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-none absolute inset-x-0 top-[42%] z-0 h-32 -translate-y-1/2 sm:h-48 lg:h-64">
        <Image src="/images/brands/Chery.png" alt="" fill sizes="100vw" className="object-contain" />
      </motion.div>
      <div className="relative z-10 mx-auto flex min-h-[570px] max-w-7xl flex-col px-5 py-14 sm:min-h-[650px] sm:px-8 sm:py-16 md:min-h-[760px] lg:min-h-[820px] lg:px-10">
        <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="text-center">
          <h1 className="relative mx-auto h-14 w-60 sm:h-16 sm:w-72"><span className="sr-only">{title}</span><Image src={logo} alt={`${name} Chery`} fill sizes="288px" className="object-contain" /></h1>
          <div className="mt-7 flex justify-center gap-4 text-sm font-light text-slate-500 sm:text-base"><span>{category.replace("Chery · ", "")}</span><span className="text-slate-300">|</span><span>Design</span><span className="text-slate-300">|</span><span>Performance</span></div>
        </motion.header>
        <motion.div initial={{ opacity: 0, y: 96, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto mt-auto h-52 w-full max-w-2xl sm:h-72 md:h-[360px] md:max-w-4xl lg:h-[430px] lg:max-w-5xl">
          <div className="absolute inset-x-[20%] bottom-[10%] h-9 rounded-full bg-slate-900/15 blur-xl" />
          <Image src={vehicle} alt={`Chery ${name}`} fill priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 896px, 1024px" className="object-contain object-bottom drop-shadow-[0_24px_24px_rgba(15,23,42,0.16)]" />
        </motion.div>
      </div>
    </section>
  );
}
