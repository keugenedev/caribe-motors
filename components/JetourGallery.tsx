"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function JetourGallery({ name, images }: { name: string; images: string[] }) {
  const galleryRef = useRef<HTMLElement>(null);
  const isVisible = useInView(galleryRef, { once: true, amount: 0.18 });
  const labels = [`Jetour ${name} extérieur`, `Jetour ${name} habitacle et finitions`, `Jetour ${name} en situation`];
  const heights = ["min-h-[380px] md:min-h-[560px]", "min-h-[380px] md:min-h-[560px]", "min-h-[400px] md:col-span-2 md:min-h-[650px]"];

  return (
    <section ref={galleryRef} aria-label={`Galerie Jetour ${name}`} className="grid gap-1 bg-white md:grid-cols-2">
      {images.map((image, index) => <motion.div key={image} initial={{ opacity: 0, y: 42, scale: 0.985 }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 1.15, delay: index * 0.24, ease: [0.16, 1, 0.3, 1] }} className={`relative overflow-hidden ${heights[index]}`}><Image src={image} alt={labels[index] ?? `Jetour ${name}`} fill sizes={index < 2 ? "(max-width: 768px) 100vw, 50vw" : "100vw"} className="object-cover" /></motion.div>)}
    </section>
  );
}
