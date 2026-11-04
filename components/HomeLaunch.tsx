"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import DealerHome from "@/components/DealerHome";

export default function HomeLaunch() {
  const [videoEnded, setVideoEnded] = useState(false);
  const finishVideo = () => setVideoEnded(true);

  const scrollToOtherSections = () => {
    const target = document.getElementById("autres-sections");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Emplacement Hero : Vidéo Suzuki Fronx au départ, qui bascule automatiquement vers le Hero Mosaïque une fois terminée */}
      <AnimatePresence mode="wait">
        {!videoEnded ? (
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
              onEnded={finishVideo}
              onError={finishVideo}
              onTimeUpdate={(event) => {
                const { currentTime, duration } = event.currentTarget;
                if (Number.isFinite(duration) && duration > 0 && currentTime >= duration - 0.25) {
                  finishVideo();
                }
              }}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/suzuki-fronx.mp4" type="video/mp4" />
            </video>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,49,0.76)_0%,rgba(7,22,49,0.28)_55%,rgba(7,22,49,0.48)_100%)]"
            />

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

            {/* Bouton pour passer la vidéo */}
            <button
              type="button"
              onClick={finishVideo}
              aria-label="Passer la vidéo et afficher l'accueil"
              className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/60 sm:bottom-8 sm:right-8"
            >
              <span>Passer</span>
              <span aria-hidden="true">&rarr;</span>
            </button>

            {/* Bouton Découvrir pour scroller immédiatement vers les autres sections */}
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                onClick={scrollToOtherSections}
                aria-label="Faire défiler vers la suite"
                className="group flex flex-col items-center gap-1.5 text-white/80 transition-all hover:text-white"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
                  Découvrir
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition group-hover:border-white/50 group-hover:bg-white/20">
                  <ChevronDown className="h-5 w-5 animate-bounce" />
                </span>
              </button>
            </div>
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
