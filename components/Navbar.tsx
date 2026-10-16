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
        <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[11px] font-semibold tracking-normal xl:px-8">
          <div className="flex items-center gap-4 text-blue-50">
            <a href="https://www.google.com/maps/search/?api=1&query=33%2C%20Boulevard%20Toussaint%20Louverture%2C%20Port-au-Prince%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0 text-[#54b834]"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>33, Blvd Toussaint Louverture, Port-au-Prince, Haïti</a>
            <span className="h-4 w-px bg-blue-300/30" />
            <a href="https://www.google.com/maps/search/?api=1&query=27%2C%20Bois%20Moquette%2C%20P%C3%A9tion-Ville%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0 text-[#54b834]"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>27, Bois Moquette, Pétion-Ville, Haïti</a>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-blue-100">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-[#54b834]"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4Z" /></svg>
            <a href="tel:+50929403001" className="text-blue-50 transition hover:text-white">(509) 2940-3001</a>
            <a href="tel:+50929403005" className="text-blue-50 transition hover:text-white">(509) 2940-3005</a>
            <span className="h-4 w-px bg-blue-300/30" />
            <span className="text-[11px] font-semibold">Suivez-nous</span>
            <span aria-label="Instagram" title="Instagram" className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-[#79cf5d]"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span>
            <span aria-label="Facebook" title="Facebook" className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-[#79cf5d]"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a24 24 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" /></svg></span>
            <span aria-label="LinkedIn" title="LinkedIn" className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-[#79cf5d]"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 4A1.6 1.6 0 1 0 5.1 7a1.6 1.6 0 0 0 0-3ZM20.3 13.4c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.5H9.7V20h2.8v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h2.8v-6.6Z" /></svg></span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Caribe Motors — Accueil" className="flex shrink-0 items-center">
          <div className="relative h-10 w-40 sm:h-11 sm:w-48">
            <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill priority className="object-contain object-left" sizes="(max-width: 640px) 160px, 192px" />
          </div>
        </Link>

        <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-8 xl:flex">
          <a href="#vehicules" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Nos véhicules</a>
          <a href="#services" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Services</a>
          <a href="#financement" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Financement</a>
          <a href="#apropos" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">À propos</a>
          <a href="#contact" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Contact</a>
        </nav>
      </div>
    </header>
  );
}
