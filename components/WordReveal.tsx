"use client";

import { motion, useReducedMotion } from "framer-motion";

const wordReveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function WordReveal({ text, delay = 0, stagger = 0.16, duration = 0.62 }: { text: string; delay?: number; stagger?: number; duration?: number }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { delayChildren: reduceMotion ? 0 : delay, staggerChildren: reduceMotion ? 0 : stagger } } }}>
      {words.map((word, index) => <motion.span key={`${word}-${index}`} variants={wordReveal} transition={{ duration: reduceMotion ? 0 : duration, ease: [0.22, 1, 0.36, 1] }} className={index < words.length - 1 ? "mr-[0.2em] inline-block" : "inline-block"}>{word}</motion.span>)}
    </motion.span>
  );
}
