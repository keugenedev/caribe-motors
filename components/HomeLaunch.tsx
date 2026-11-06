"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DealerHome from "@/components/DealerHome";

export default function HomeLaunch() {
  const [launchStage, setLaunchStage] = useState<"fronx" | "across" | "complete">("across");
  const finishFronx = () => setLaunchStage("complete");
  const finishAcross = () => setLaunchStage("fronx");

  return (
    <div className="flex flex-col">
      {/* 1. Emplacement Hero : Vidéo Suzuki Fronx au départ, qui bascule automatiquement vers le Hero Mosaïque une fois terminée */}
      <AnimatePresence mode="wait">
        {launchStage === "fronx" ? (
          <motion.section
            key="fronx-video-hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            aria-label="Suzuki Fronx bientôt disponible"
            className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#071631] lg:h-[calc(100svh-120px)]"
          >
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finishFronx}
              onError={finishFronx}
              onTimeUpdate={(event) => {
                const { currentTime, duration } = event.currentTarget;
                if (Number.isFinite(duration) && duration > 0 && currentTime >= duration - 0.25) {
                  finishFronx();
                }
              }}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/suzuki-fronx.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-10"
            >
              <motion.p
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mb-7 text-sm font-bold uppercase tracking-[0.24em] text-white sm:text-base"
              >
                Bientôt disponible
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-28 w-full max-w-[44rem] sm:h-32"
              >
                <Image
                  src="/images/fronx-suzuki-logo.png"
                  alt="Suzuki Fronx"
                  fill
                  sizes="(max-width: 640px) 92vw, 704px"
                  className="object-contain brightness-0 invert"
                  priority
                />
              </motion.div>
            </motion.div>

          </motion.section>
        ) : launchStage === "across" ? (
          <motion.section
            key="across-video-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            aria-label="Suzuki Across"
            className="relative isolate h-[calc(100svh-76px)] overflow-hidden bg-[#071631] lg:h-[calc(100svh-120px)]"
          >
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finishAcross}
              onError={finishAcross}
              onTimeUpdate={(event) => {
                const { currentTime, duration } = event.currentTarget;
                if (Number.isFinite(duration) && duration > 0 && currentTime >= duration - 0.25) {
                  finishAcross();
                }
              }}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/suzuki-across-light.mp4" type="video/mp4" />
            </video>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-10"
            >
              <motion.p
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mb-7 text-sm font-bold uppercase tracking-[0.24em] text-white sm:text-base"
              >
                Bientôt disponible
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-28 w-full max-w-[44rem] sm:h-32"
              >
                <Image
                  src="/images/suzuki/across-logo-cropped.png"
                  alt="Suzuki Across"
                  fill
                  sizes="(max-width: 640px) 92vw, 704px"
                  className="object-contain brightness-0 invert"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="dealer-mosaic-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Cette section de mosaïque s'affiche uniquement après la fin de la vidéo */}
            <DealerHome onlyHero={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Les autres sections (Bienvenue Caribe Motors, Marques partenaires) :
             Toujours visibles et accessibles immédiatement en scrollant, même pendant la vidéo */}
      <div id="autres-sections">
        <DealerHome onlyContent={true} />
      </div>
    </div>
  );
}
