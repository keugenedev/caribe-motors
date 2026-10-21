"use client";

import { motion, useInView } from "framer-motion";
import { Fuel, Gauge, Ruler, Settings2, UsersRound, type LucideIcon } from "lucide-react";
import { useRef } from "react";

export type JetourSpecification = {
  icon: "fuel" | "gauge" | "settings" | "ruler" | "seats";
  label: string;
  value: string;
};

const icons: Record<JetourSpecification["icon"], LucideIcon> = {
  fuel: Fuel,
  gauge: Gauge,
  settings: Settings2,
  ruler: Ruler,
  seats: UsersRound,
};

export default function JetourSpecifications({ specifications }: { specifications: JetourSpecification[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }} className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]">Performances et dimensions</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Tout ce qu’il faut savoir.</h2></div>
        <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Les caractéristiques sont indiquées à titre informatif. Notre équipe vous accompagne pour confirmer la version et les équipements disponibles du modèle Jetour choisi.</p>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-slate-200 py-10 md:grid-cols-3">
        {specifications.map((specification, index) => {
          const Icon = icons[specification.icon];
          return <motion.div key={specification.label} initial={{ opacity: 0, y: 18 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.2 + index * 0.12, ease: "easeOut" }} className="flex items-start gap-3"><Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#54b834]" /><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{specification.label}</p><p className="mt-1 text-lg font-black text-[#102a56] sm:text-xl">{specification.value}</p></div></motion.div>;
        })}
      </div>
    </section>
  );
}
