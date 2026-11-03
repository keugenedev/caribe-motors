"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DealerHome from "@/components/DealerHome";

export default function HomeLaunch() {
  const [videoComplete, setVideoComplete] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {videoComplete ? (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <DealerHome />
        </motion.div>
      ) : (
        <motion.section key="fronx-video" exit={{ opacity: 0 }} transition={{ duration: 0.45 }} aria-label="Suzuki Fronx bientôt disponible" className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#071631] lg:h-[calc(100svh-120px)]">
          <video autoPlay muted playsInline preload="auto" onEnded={() => setVideoComplete(true)} onError={() => setVideoComplete(true)} className="absolute inset-0 h-full w-full object-cover">
            <source src="/videos/suzuki-fronx.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,49,0.76)_0%,rgba(7,22,49,0.28)_55%,rgba(7,22,49,0.48)_100%)]" />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-10">
            <motion.p initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="mb-7 text-sm font-bold uppercase tracking-[0.24em] text-white sm:text-base">Bientôt disponible</motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.82 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} className="relative h-14 w-52 sm:h-16 sm:w-60"><Image src="/images/brands/Suzuki.png" alt="Suzuki" fill sizes="240px" className="object-contain brightness-0 invert" /></motion.div>
            <h1 className="mt-7 text-7xl font-black tracking-[-0.065em] text-white sm:text-9xl">Suzuki Fronx</h1>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
