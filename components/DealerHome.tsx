"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WordReveal from "@/components/WordReveal";

const brands = [
  { name: "Suzuki", image: "/images/brands/Suzuki.png", href: "https://www.suzukicaribbean.com/" },
  { name: "Chery", image: "/images/brands/Chery.png", href: "https://cheryhaiti.com/" },
  { name: "Jetour", image: "/images/brands/jetour.png", href: "https://www.jetourhaiti.com/index.html" },
  { name: "GWM", image: "/images/brands/GWM.png", href: "https://gwmcaribbean.com/" },
  { name: "Haval", image: "/images/brands/Haval.png", href: "https://gwmcaribbean.com/" },
  { name: "Tank", image: "/images/brands/Tank.png", href: "https://gwmcaribbean.com/" },
  { name: "Jeep", image: "/images/brands/Jeep.png", href: "https://www.jeep-caribbean.com/haiti" },
  { name: "RAM", image: "/images/brands/Ram.png", href: "https://www.ramcaribbean.com/" },
  { name: "Dodge", image: "/images/brands/Dodge.png", href: "https://www.dodge.com/" },
  { name: "Chrysler", image: "/images/brands/Chrysler.png", href: "https://www.chrysler.com/" },
  { name: "FAW", image: "/images/brands/FAW.png", href: "https://www.faw.com/" },
  { name: "GAC", image: "/images/brands/GAC.png", href: "https://www.gacgroup.com/en" },
];

const heroGallery = [
  "/images/chery/himla/himla-hero.jpg",
  "/images/chery/himla/himla-terrain.jpeg",
  "/images/chery/himla/himla-utility.jpg",
  "/images/chery/details/tiggo-8/07-3529f35ace3f4bd5b72beee074ebf8fd430b8eeb-8192x4608.jpg",
  "/images/chery/details/tiggo-8/17-87c8c19e43ca8acc9c23aa357896308a14d8bf85-8192x4608.jpg",
  "/images/chery/details/tiggo-7/06-2fc5bb802e9e7487f6e179aca82bb7cf1aab116e-2500x1406.jpg",
  "/images/chery/details/tiggo-7/05-2e2ea069460699239cd0b217a13e5d4da4ef64df-2500x1407.jpg",
  "/images/chery/details/tiggo-4/01-02f80ef6d292e2b9f2ac74a7d9476a99ecf8647d-2880x1620.jpg",
  "/images/chery/details/tiggo-4/02-0a9c3c72518f173dd8c4eb59d1a78776c4e233c8-4000x2250.jpg",
  "/images/jetour/models/t1/t1-001-1.jpg",
  "/images/jetour/models/t1/t1-007-2.jpg",
  "/images/jetour/models/t2/t2-014-7.webp",
  "/images/jetour/models/t2/t2-006-interieur.webp",
  "/images/jetour/models/x70-plus/x70-plus-001-1.png",
  "/images/jetour/models/x70-plus/x70-plus-004-interieur.png",
  "/images/jetour/models/x90-plus/x90-plus-004-2.png",
  "/images/gallery/gwm-p-series/commercial-01.jpg",
  "/images/gallery/gwm-p-series/commercial-03.jpg",
  "/images/gallery/gwm-p-series/commercial-05.jpg",
  "/images/gallery/gwm-p-series/commercial-07.jpg",
  "/images/gallery/gwm-p300/p300-01.jpg",
  "/images/gallery/gwm-p300/p300-04.jpg",
  "/images/gallery/gwm-p300/p300-09.jpg",
  "/images/gallery/gwm-p300/p300-13.jpg",
];

const heroTileIndexes = Array.from({ length: 13 }, (_, index) => index);
const heroTitleWords = ["Toutes", "vos", "marques", "automobiles,", "au", "même", "endroit."];
const heroDescriptionWords = ["Découvrez", "une", "sélection", "complète", "de", "véhicules,", "avec", "l’accompagnement", "de", "Caribe", "Motors."];

const wordReveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function DealerHome() {
  const [tileImages, setTileImages] = useState(() => [...heroTileIndexes]);
  const [activeTile, setActiveTile] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTileImages((images) => {
        const nextImages = [...images];
        nextImages[activeTile] = (nextImages[activeTile] + heroTileIndexes.length) % heroGallery.length;
        return nextImages;
      });
      setActiveTile((tileIndex) => (tileIndex + 1) % heroTileIndexes.length);
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [activeTile]);

  return <>
    <section aria-label="Caribe Motors et ses marques" className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-white lg:h-[calc(100svh-120px)]">
      <div aria-hidden="true" className="absolute inset-0 grid auto-rows-fr grid-cols-2 gap-[2px] bg-white sm:grid-cols-4">
        {heroTileIndexes.map((tileIndex) => {
          const image = heroGallery[tileImages[tileIndex]];
          const imageOffset = tileIndex % 2 === 0 ? -14 : 14;
          return <div key={tileIndex} className={`relative overflow-hidden ${tileIndex === 0 ? "col-span-2 row-span-2" : ""}`}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div key={image} initial={reduceMotion ? false : { opacity: 0, scale: 1.08, x: imageOffset }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, x: -imageOffset }} transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 will-change-transform">
                <Image src={image} alt="" fill priority={tileIndex < 4} sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>;
        })}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,49,0.9)_0%,rgba(7,22,49,0.68)_34%,rgba(7,22,49,0.12)_68%,rgba(7,22,49,0.28)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#071631]/90 via-[#071631]/20 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex flex-1 flex-col justify-center text-center">
          <motion.h1 initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { delayChildren: reduceMotion ? 0 : 0.18, staggerChildren: reduceMotion ? 0 : 0.23 } } }} className="mx-auto max-w-xl text-[2.35rem] font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl">
            {heroTitleWords.map((word, index) => <motion.span key={word} variants={wordReveal} transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} className={`inline-block ${index < heroTitleWords.length - 1 ? "mr-[0.18em]" : ""} ${index === 2 || index === 3 ? "text-[#54b834]" : ""}`}>{word}</motion.span>)}
          </motion.h1>
          <motion.p initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { delayChildren: reduceMotion ? 0 : 2.35, staggerChildren: reduceMotion ? 0 : 0.085 } } }} className="mx-auto mt-5 max-w-md text-base leading-7 text-white/85 sm:text-lg">
            {heroDescriptionWords.map((word, index) => <motion.span key={`${word}-${index}`} variants={wordReveal} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }} className={`inline-block ${index < heroDescriptionWords.length - 1 ? "mr-[0.22em]" : ""}`}>{word}</motion.span>)}
          </motion.p>
        </div>

        <div className="hidden lg:mt-auto lg:block lg:pt-8">
          <div className="hidden grid-cols-4 overflow-hidden border border-white/25 bg-white/95 shadow-2xl lg:grid lg:grid-cols-12">
            {brands.map((brand, index) => <motion.a key={brand.name} href={brand.href} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le site officiel ${brand.name}`} initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.65 + index * 0.18, ease: [0.22, 1, 0.36, 1] }} className="group relative flex h-12 items-center justify-center border-b border-r border-slate-200 p-2 last:border-r-0 sm:h-14 lg:h-16"><Image src={brand.image} alt={brand.name} fill sizes="120px" className="object-contain p-2.5 transition duration-200 group-hover:scale-105" /></motion.a>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}><Image src="/images/caribe-logo.png" alt="Caribe Motors" width={250} height={76} sizes="250px" className="mx-auto h-auto w-48 object-contain sm:w-56" /></motion.div>
        <div className="mt-7 grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]"><WordReveal text="Bienvenue chez Caribe Motors" delay={0.28} stagger={0.16} /></p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#102a56] sm:text-5xl"><WordReveal text="Caribe Motors S.A. L’excellence automobile depuis 2002" delay={1.2} stagger={0.2} duration={0.68} /></h2>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p><WordReveal text="Fondée et ouverte au public en avril 2002, Caribe Motors S.A. est une entreprise de référence dans le secteur automobile en Haïti. Distributeur de marques internationales prestigieuses telles que Suzuki, Jetour, Chery, GWM, Gac, FAW, Chrysler, Dodge, Jeep et Ram, elle s’engage à offrir des véhicules de qualité, un service professionnel et une expérience client exceptionnelle." delay={2.7} stagger={0.04} duration={0.45} /></p>
            <p><WordReveal text="Depuis plus de 24 ans, Caribe Motors S.A. accompagne ses clients avec une passion constante pour l’automobile, l’innovation et la satisfaction client." delay={4.2} stagger={0.06} duration={0.45} /></p>
          </div>
        </div>
      </div>
    </section>

    <motion.section initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }} className="text-xs font-bold uppercase tracking-[0.22em] text-[#54b834]">Nos marques partenaires</motion.p>
        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl text-4xl font-black tracking-[-0.05em] text-[#172760] sm:text-5xl">Un univers de marques à explorer.</motion.h2>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }} className="max-w-sm text-sm leading-6 text-slate-600">Cliquez sur un logo pour consulter le site officiel de la marque.</motion.p>
        </div>
        <div className="mt-11 grid grid-cols-2 gap-px overflow-hidden bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => <div key={brand.name} className="h-28 bg-white"><motion.a href={brand.href} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le site officiel ${brand.name}`} initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.18 + index * 0.14, ease: [0.22, 1, 0.36, 1] }} className="group relative flex h-full items-center justify-center bg-white p-6 transition hover:bg-slate-50"><Image src={brand.image} alt={brand.name} fill sizes="180px" className="object-contain p-6 transition group-hover:scale-105" /></motion.a></div>)}
        </div>
      </div>
    </motion.section>
  </>;
}
