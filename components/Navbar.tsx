"use client";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenTestDrive?: () => void;
}

export default function Navbar({ onOpenTestDrive }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="hidden bg-[#102a56] text-white lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[10px] font-semibold uppercase tracking-[0.16em] xl:px-8">
          <span className="text-blue-100">Votre concessionnaire automobile en Haïti</span>
          <div className="flex items-center gap-5 text-blue-50">
            <span>Delmas 33 · Port-au-Prince</span>
            <a href="tel:+50928160000" className="transition hover:text-white">+509 2816-0000</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Caribe Motors — Accueil" className="flex shrink-0 items-center">
          <div className="relative h-10 w-40 sm:h-11 sm:w-48">
            <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill priority className="object-contain object-left" sizes="(max-width: 640px) 160px, 192px" />
          </div>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          <a href="#vehicules" className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 transition hover:text-[#0d4b8e]">Nos véhicules</a>
          <a href="#services" className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 transition hover:text-[#0d4b8e]">Services</a>
          <a href="#financement" className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 transition hover:text-[#0d4b8e]">Financement</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 transition hover:text-[#0d4b8e]">Contact</a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a href="https://wa.me/50937000000?text=Bonjour%20Caribe%20Motors" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-lg border border-[#1a8d63]/35 bg-[#f1fbf7] px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#177653] transition hover:border-[#177653] hover:bg-[#e1f6ed] md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-[#27b47e]" />
            WhatsApp
          </a>
          <button onClick={onOpenTestDrive} className="rounded-lg bg-[#0d4b8e] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_8px_16px_rgba(13,75,142,0.2)] transition hover:bg-[#0a3c71] hover:shadow-[0_10px_20px_rgba(13,75,142,0.28)] sm:px-5">
            Planifier un essai
          </button>
        </div>
      </div>
    </header>
  );
}
