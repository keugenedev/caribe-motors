"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

type JetourModelHeroProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  colorImages?: Record<string, string>;
};

export default function JetourModelHero({ name, category, description, image, colorImages }: JetourModelHeroProps) {
  const searchParams = useSearchParams();
  const selectedImage = colorImages?.[searchParams.get("color") ?? ""] ?? image;
  return (
    <section className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#fcfcfc] text-[#222] lg:h-[calc(100svh-120px)]">
      <motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.055, scale: 1 }} transition={{ duration: 2.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-none absolute inset-x-0 top-[42%] z-0 h-32 -translate-y-1/2 sm:h-48 lg:h-64">
        <Image src="/images/jetour/jetour-wordmark.png" alt="" fill sizes="100vw" className="object-contain" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 py-10 pb-6 sm:px-8 sm:py-12 sm:pb-8 lg:px-10 lg:py-8 lg:pb-8">
        <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="text-center">
          <div className="relative mx-auto h-8 w-32 sm:h-10 sm:w-40">
            <Image src="/images/jetour/jetour-logo.svg" alt="Jetour" fill sizes="160px" className="object-contain" />
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#102a56] sm:text-5xl">{name}</h1>
          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-light text-slate-500 sm:text-base">
            <span>{category}</span><span className="text-slate-300">|</span><span>Design</span><span className="text-slate-300">|</span><span>Performance</span>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
        </motion.header>

        <motion.div key={selectedImage} initial={{ opacity: 0, y: 96, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto mt-auto h-[min(38vh,17rem)] w-full max-w-2xl sm:h-[min(42vh,20rem)] md:max-w-4xl lg:h-[min(44vh,24rem)] lg:max-w-5xl">
          <div className="absolute inset-x-[20%] bottom-[10%] h-9 rounded-full bg-slate-900/15 blur-xl" />
          <Image src={selectedImage} alt={`Jetour ${name}`} fill priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 896px, 1024px" className="object-contain object-bottom drop-shadow-[0_24px_24px_rgba(15,23,42,0.16)]" />
        </motion.div>
      </div>
    </section>
  );
}
