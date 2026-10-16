"use client";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenTestDrive?: () => void;
}

export default function Navbar({ onOpenTestDrive }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="group flex items-center">
            <div className="relative h-11 w-44 sm:h-12 sm:w-52">
              <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill priority className="object-contain" sizes="(max-width: 640px) 176px, 208px" />
            </div>
          </Link>
          <div className="hidden h-7 w-px bg-slate-200 sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <div className="relative h-7 w-28">
              <Image src="/images/jetour/jetour-logo.svg" alt="JETOUR" fill className="object-contain" sizes="112px" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Concessionnaire officiel</span>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs text-slate-600 lg:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-medium tracking-wide">Véhicules disponibles en showroom</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/50937000000?text=Bonjour%20Caribe%20Motors" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 transition hover:bg-emerald-100 sm:inline-flex">WhatsApp ventes</a>
          <button onClick={onOpenTestDrive} className="rounded-full bg-gradient-to-r from-[#e51a2c] to-[#ff3b4e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-200 transition hover:scale-[1.03]">Réserver un essai</button>
        </div>
      </div>
    </header>
  );
}
