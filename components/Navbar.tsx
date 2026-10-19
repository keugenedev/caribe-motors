"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const JETOUR_MODELS = [
  { name: "T1", image: "/images/jetour/t1-black.png" },
  { name: "T2", image: "/images/jetour/model-t2.png" },
  { name: "Dashing", image: "/images/jetour/model-dashing.png" },
  { name: "X70", image: "/images/jetour/model-x70.png" },
  { name: "X70 Plus", image: "/images/jetour/model-x70plus.png" },
  { name: "X90 Plus", image: "/images/jetour/model-x90plus.png" },
];

const BRANDS = [
  { name: "Jetour", image: "/images/brands/jetour.png", available: true },
  { name: "Chery", image: "/images/brands/Chery.png" },
  { name: "GWM", image: "/images/brands/GWM.png" },
  { name: "Haval", image: "/images/brands/Haval.png" },
  { name: "Tank", image: "/images/brands/Tank.png" },
  { name: "Suzuki", image: "/images/brands/Suzuki.png" },
  { name: "Jimny", image: "/images/brands/Jimny.png" },
  { name: "Jeep", image: "/images/brands/Jeep.png" },
  { name: "RAM", image: "/images/brands/Ram.png" },
  { name: "Dodge", image: "/images/brands/Dodge.png" },
  { name: "Chrysler", image: "/images/brands/Chrysler.png" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isBrandsMenuOpen, setIsBrandsMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const toggleBrandsMenu = () => {
    setIsBrandsMenuOpen((isOpen) => !isOpen);
    setSelectedBrand(null);
    setIsModelsOpen(false);
  };

  const openBrandsMenu = () => setIsBrandsMenuOpen(true);

  const closeBrandsMenu = () => {
    setIsBrandsMenuOpen(false);
    setSelectedBrand(null);
    setIsModelsOpen(false);
  };

  const previewJetourModels = () => {
    setSelectedBrand("jetour");
    setIsModelsOpen(true);
  };

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
            <span className="text-[11px] font-semibold text-blue-100">Suivez-nous :</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/caribemotors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-white hover:scale-110"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a24 24 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/caribemotors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-white hover:scale-110"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/caribe-motors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-white hover:scale-110"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 4A1.6 1.6 0 1 0 5.1 7a1.6 1.6 0 0 0 0-3ZM20.3 13.4c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.5H9.7V20h2.8v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h2.8v-6.6Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/50929403001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-white hover:scale-110"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.04.8 1.11-2.96-.19-.31c-.81-1.31-1.24-2.83-1.24-4.5 0-4.54 3.7-8.24 8.24-8.24z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@caribemotors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="flex h-5 w-5 items-center justify-center text-[#54b834] transition hover:text-white hover:scale-110"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Caribe Motors — Accueil" className="flex shrink-0 items-center">
          <div className="relative h-10 w-40 sm:h-11 sm:w-48">
            <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill priority className="object-contain object-left" sizes="(max-width: 640px) 160px, 192px" />
          </div>
        </Link>

        <nav aria-label="Navigation principale" onMouseLeave={closeBrandsMenu} className="relative ml-auto hidden items-center gap-8 xl:flex">
          <a href="#vehicules" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Nos véhicules</a>
          <button
            type="button"
            aria-expanded={isBrandsMenuOpen}
            aria-controls="menu-marques"
            onClick={toggleBrandsMenu}
            onMouseEnter={openBrandsMenu}
            onFocus={openBrandsMenu}
            className="inline-flex items-center gap-1 text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]"
          >
            Nos marques
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3.5 w-3.5 transition-transform ${isBrandsMenuOpen ? "rotate-180" : ""}`}>
              <path d="m4 6 4 4 4-4" />
            </svg>
          </button>
          <Link href="/services" aria-current={pathname === "/services" ? "page" : undefined} className={`text-[15px] font-semibold tracking-normal transition hover:text-[#0d4b8e] ${pathname === "/services" ? "text-[#54b834]" : "text-[#14223c]"}`}>Services</Link>
          <a href="#financement" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Financement</a>
          <a href="#apropos" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">À propos</a>
          <a href="#contact" className="text-[15px] font-semibold tracking-normal text-[#14223c] transition hover:text-[#0d4b8e]">Contact</a>
          {isBrandsMenuOpen && (
            <div id="menu-marques" className="absolute right-0 top-full z-50 w-[860px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
              <div className="flex items-center justify-between p-4">
                {BRANDS.map((brand) =>
                  brand.available ? (
                    <button
                      key={brand.name}
                      type="button"
                      aria-label={brand.name}
                      onMouseEnter={previewJetourModels}
                      onFocus={previewJetourModels}
                      onClick={previewJetourModels}
                      className={`relative flex h-12 w-14 shrink-0 items-center justify-center rounded-xl p-2 transition ${selectedBrand === "jetour" ? "ring-2 ring-[#54b834] ring-offset-2" : "hover:bg-slate-50"}`}
                    >
                      <Image src={brand.image} alt={brand.name} fill sizes="56px" className="object-contain" />
                    </button>
                  ) : (
                    <div key={brand.name} className="relative h-12 w-14 shrink-0 p-2">
                      <Image src={brand.image} alt={brand.name} fill sizes="56px" className="object-contain" />
                    </div>
                  )
                )}
              </div>

              {selectedBrand === "jetour" && (
                <div className="border-t border-slate-200 px-5 py-4">
                  <button
                    type="button"
                    onClick={() => setIsModelsOpen((isOpen) => !isOpen)}
                    aria-expanded={isModelsOpen}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative h-7 w-28">
                        <Image src="/images/brands/jetour.png" alt="Jetour" fill sizes="80px" className="object-contain object-left" />
                      </span>
                      <span className="text-sm font-bold text-[#102a56]">Tous les modèles</span>
                      <span className="text-xs font-medium text-slate-400">{JETOUR_MODELS.length}</span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#1643aa]" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3.5 w-3.5 ${isModelsOpen ? "rotate-180" : ""}`}>
                        <path d="m4 6 4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  {isModelsOpen && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {JETOUR_MODELS.map((model) => (
                        <a key={model.name} href="#vehicules" className="rounded-xl p-2.5">
                          <div className="relative h-20 overflow-hidden rounded-lg">
                            <Image src={model.image} alt={`Jetour ${model.name}`} fill sizes="190px" className="object-contain" />
                          </div>
                          <p className="mt-2 text-xs font-bold text-[#102a56]">{model.name}</p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
