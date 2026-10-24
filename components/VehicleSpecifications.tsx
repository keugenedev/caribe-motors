"use client";

import { motion, useInView } from "framer-motion";
import { Fuel, Gauge, Ruler, Settings2, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import WordReveal from "@/components/WordReveal";

export type VehicleSpecification = { icon: "fuel" | "gauge" | "settings" | "ruler"; label: string; value: string };

const icons: Record<VehicleSpecification["icon"], LucideIcon> = { fuel: Fuel, gauge: Gauge, settings: Settings2, ruler: Ruler };

export default function VehicleSpecifications({ brand, specifications }: { brand: string; specifications: VehicleSpecification[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useInView(sectionRef, { once: true, amount: 0.3 });
  return <section ref={sectionRef} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="Performances et dimensions" delay={0.1} stagger={0.18} /></p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"><WordReveal text="Tout ce qu’il faut savoir." delay={0.85} stagger={0.22} duration={0.7} /></h2></div><p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"><WordReveal text={`Les caractéristiques présentées correspondent aux informations constructeur disponibles pour ${brand}. Elles peuvent varier selon la version distribuée localement.`} delay={2.15} stagger={0.07} duration={0.48} /></p></div>
    <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-3">{specifications.map((specification, index) => { const Icon = icons[specification.icon]; return <div key={specification.label} className="flex items-start gap-3"><motion.span initial={{ opacity: 0, scale: 0.65, y: 8 }} animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.28 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}><Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#54b834]" /></motion.span><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400"><WordReveal text={specification.label} delay={0.35 + index * 0.12} stagger={0.13} duration={0.5} /></p><p className="mt-1 text-lg font-black text-[#102a56] sm:text-xl"><WordReveal text={specification.value} delay={0.85 + index * 0.12} stagger={0.1} duration={0.45} /></p></div></div>; })}</div>
  </section>;
}
