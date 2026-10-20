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
  const isVisible = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section ref={sectionRef} className="bg-[#f6f9fa] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease: "easeOut" }} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#168793]">Spécifications</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102a56] sm:text-5xl">Pensé dans les moindres détails.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Caractéristiques indicatives de la gamme Jetour Haïti. Les équipements et valeurs définitifs peuvent varier selon la version disponible.</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-slate-200 py-10 md:grid-cols-3 lg:grid-cols-4">
          {specifications.map((specification, index) => {
            const Icon = icons[specification.icon];
            return (
              <motion.div key={specification.label} initial={{ opacity: 0, y: 18 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease: "easeOut" }} className="flex items-start gap-3">
                <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#168793]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{specification.label}</p>
                  <p className="mt-1 text-base font-black leading-6 text-[#102a56] sm:text-lg">{specification.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
