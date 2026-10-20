"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type JetourModelHeroProps = {
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function JetourModelHero({ name, category, description, image }: JetourModelHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07131d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(50,126,139,0.28),transparent_48%),linear-gradient(135deg,#07131d_0%,#102632_55%,#07131d_100%)]" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-white/10 sm:h-[32rem] sm:w-[32rem]" />
      <div className="pointer-events-none absolute -left-20 bottom-[-10rem] h-80 w-80 rounded-full bg-[#4aaeb8]/15 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-8 px-5 py-16 sm:min-h-[690px] sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: "easeOut" }} className="relative z-10 max-w-xl">
          <div className="relative h-9 w-32 opacity-90 sm:h-10 sm:w-36">
            <Image src="/images/jetour/jetour-logo-white.svg" alt="Jetour" fill sizes="144px" className="object-contain object-left" />
          </div>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.26em] text-[#83d6de]">{category}</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">{name}</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-200 sm:text-lg">{description}</p>
          <div className="mt-9 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
            <span className="border border-white/20 px-4 py-2.5">Design affirmé</span>
            <span className="border border-white/20 px-4 py-2.5">Prêt à explorer</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, x: 44 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative h-[300px] sm:h-[390px] lg:h-[500px]">
          <div className="absolute inset-x-[13%] bottom-[8%] h-12 rounded-full bg-black/70 blur-2xl" />
          <Image src={image} alt={`Jetour ${name}`} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-contain drop-shadow-[0_30px_38px_rgba(0,0,0,0.44)]" />
        </motion.div>
      </div>
    </section>
  );
}
