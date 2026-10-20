"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { id: "jetour", name: "Jetour", logo: "/images/brands/jetour.png" },
  { id: "chery", name: "Chery", logo: "/images/brands/Chery.png" },
  { id: "gwm", name: "GWM", logo: "/images/brands/GWM.png" },
  { id: "haval", name: "Haval", logo: "/images/brands/Haval.png" },
  { id: "tank", name: "Tank", logo: "/images/brands/Tank.png" },
  { id: "suzuki", name: "Suzuki", logo: "/images/brands/Suzuki.png" },
  { id: "jeep", name: "Jeep", logo: "/images/brands/Jeep.png" },
  { id: "ram", name: "RAM", logo: "/images/brands/Ram.png" },
  { id: "dodge", name: "Dodge", logo: "/images/brands/Dodge.png" },
  { id: "chrysler", name: "Chrysler", logo: "/images/brands/Chrysler.png" },
];

export default function BrandScroller() {
  return <div className="bg-[#fcfcfc]">
    <div>{brands.map((brand) => <section key={brand.id} id={`brand-${brand.id}`} className="relative isolate flex min-h-[calc(100svh-76px)] snap-start overflow-hidden bg-[#fcfcfc] lg:min-h-[calc(100svh-120px)]"><motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 0.055, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: "easeOut" }} className="pointer-events-none absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 sm:h-52 lg:h-72"><Image src={brand.logo} alt="" fill sizes="100vw" className="object-contain" /></motion.div><motion.div initial={{ opacity: 0, y: 28, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-8 text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#54b834]">Caribe Motors · Marque partenaire</p><div className="relative mt-8 h-20 w-full max-w-md sm:h-28 sm:max-w-xl"><Image src={brand.logo} alt={brand.name} fill sizes="576px" className="object-contain" /></div><h1 className="mt-8 text-3xl font-black tracking-tight text-[#102a56] sm:text-5xl">{brand.name}</h1></motion.div></section>)}</div>
  </div>;
}
