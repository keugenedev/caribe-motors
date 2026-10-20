"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Fuel, Gauge, Ruler, Settings2, type LucideIcon } from "lucide-react";

export type CherySpecification = {
  icon: "fuel" | "gauge" | "settings" | "ruler";
  label: string;
  value: string;
};

const icons: Record<CherySpecification["icon"], LucideIcon> = {
  fuel: Fuel,
  gauge: Gauge,
  settings: Settings2,
  ruler: Ruler,
};

function AnimatedValue({ value, active, delay }: { value: string; active: boolean; delay: number }) {
  const match = value.match(/^(\d[\d\s]*(?:[.,]\d+)?)(.*)$/);
  const target = match ? Number(match[1].replace(/\s/g, "").replace(",", ".")) : null;
  const suffix = match?.[2] ?? value;
  const decimals = match?.[1].includes(".") || match?.[1].includes(",") ? (match[1].split(/[.,]/)[1]?.length ?? 0) : 0;
  const [current, setCurrent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || target === null || hasAnimated.current) return;
    hasAnimated.current = true;
    const controls = animate(0, target, {
      duration: 1.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [active, delay, target]);

  if (target === null) return <>{value}</>;
  const displayed = decimals > 0
    ? current.toFixed(decimals)
    : Math.round(current).toLocaleString("fr-FR").replace(/\u202f/g, " ");
  return <>{displayed}{suffix}</>;
}

export default function CherySpecifications({ specifications }: { specifications: CherySpecification[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }} className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]">Performances et dimensions</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Tout ce qu’il faut savoir.</h2></div>
        <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Les caractéristiques sont issues de la fiche technique officielle Chery Haïti. Consultez-la pour les détails des équipements et versions disponibles.</p>
      </motion.div>
      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-slate-200 py-10 md:grid-cols-3">
        {specifications.map((specification, index) => {
          const Icon = icons[specification.icon];
          return <motion.div key={specification.label} initial={{ opacity: 0, y: 18 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.2 + index * 0.12, ease: "easeOut" }} className="flex items-start gap-3"><Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#54b834]" /><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{specification.label}</p><p className="mt-1 text-lg font-black text-[#102a56] sm:text-xl"><AnimatedValue value={specification.value} active={isVisible} delay={0.38 + index * 0.12} /></p></div></motion.div>;
        })}
      </div>
    </section>
  );
}
