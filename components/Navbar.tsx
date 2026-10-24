"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Vehicle {
  name: string;
  image: string;
  label?: string;
  color?: string;
  modelLogo?: string;
}

interface Brand {
  id: string;
  name: string;
  image: string;
  vehicles?: Vehicle[];
}

const vehicleHref = (brand: Brand, vehicle: Vehicle) => {
  const colorQuery = vehicle.color ? `?color=${vehicle.color}` : "";
  return brand.id === "chery"
  ? `/vehicules/chery/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`
  : brand.id === "jetour"
    ? `/vehicules/jetour/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`
    : brand.id === "gwm"
      ? `/vehicules/gwm/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}${colorQuery}`
      : brand.id === "tank"
        ? `/vehicules/tank/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}${colorQuery}`
        : brand.id === "haval"
          ? `/vehicules/haval/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}${colorQuery}`
        : "/marques";
};

const BRANDS: Brand[] = [
  {
    id: "jetour",
    name: "Jetour",
    image: "/images/brands/jetour.png",
    vehicles: [
      { name: "T1", image: "/images/jetour/model-t1.png" },
      { name: "T2", image: "/images/jetour/model-t2.png" },
      { name: "X50", image: "/images/jetour/models/x50/x50-001-7.png" },
      { name: "Dashing", image: "/images/jetour/model-dashing.png" },
      { name: "X70 FL", image: "/images/jetour/model-x70.png" },
      { name: "X70 Plus", image: "/images/jetour/model-x70plus.png" },
      { name: "X90 Plus", image: "/images/jetour/model-x90plus.png" },
    ],
  },
  {
    id: "chery",
    name: "Chery",
    image: "/images/brands/Chery.png",
    vehicles: [
      { name: "Himla", image: "/images/chery/vehicles/himla.png", modelLogo: "/images/chery/logos/himla.png" },
      { name: "Tiggo 2", image: "/images/chery/vehicles/tiggo-2.png", modelLogo: "/images/chery/logos/tiggo-2.png" },
      { name: "Tiggo 4", image: "/images/chery/vehicles/tiggo-4.png", modelLogo: "/images/chery/logos/tiggo-4.png" },
      { name: "Tiggo 7", image: "/images/chery/vehicles/tiggo-7.png", modelLogo: "/images/chery/logos/tiggo-7.png" },
      { name: "Tiggo 7 CSH", image: "/images/chery/vehicles/tiggo-7-csh.png", modelLogo: "/images/chery/logos/tiggo-7-csh.png" },
      { name: "Tiggo 8", image: "/images/chery/vehicles/tiggo-8.png", modelLogo: "/images/chery/logos/tiggo-8.png" },
      { name: "Tiggo 8 CSH", image: "/images/chery/vehicles/tiggo-8-csh.png", modelLogo: "/images/chery/logos/tiggo-8-csh.png" },
      { name: "Tiggo 9", image: "/images/chery/vehicles/tiggo-9.png", modelLogo: "/images/chery/logos/tiggo-9.png" },
      { name: "Tiggo 9 CSH", image: "/images/chery/vehicles/tiggo-9-csh.png", modelLogo: "/images/chery/logos/tiggo-9-csh.png" },
    ],
  },
  {
    id: "gwm",
    name: "GWM",
    image: "/images/brands/GWM.png",
    vehicles: [
      { name: "P-Series", label: "P-Series · Gris", color: "silver", image: "/images/nav-thumbnails-v2/gwm-silver.png" },
      { name: "P-Series", label: "P-Series · Brun", color: "brown", image: "/images/nav-thumbnails-v2/gwm-brown.png" },
      { name: "P-Series", label: "P-Series · Orange", color: "orange", image: "/images/nav-thumbnails-v2/gwm-orange.png" },
      { name: "P-Series", label: "P-Series · Rouge", color: "red", image: "/images/nav-thumbnails-v2/gwm-red.png" },
      { name: "P-Series", label: "P-Series · Bleu", color: "blue", image: "/images/nav-thumbnails-v2/gwm-blue.png" },
      { name: "P-Series", label: "P-Series · Noir", color: "black", image: "/images/nav-thumbnails-v2/gwm-black.png" },
    ],
  },
  {
    id: "haval",
    name: "Haval",
    image: "/images/brands/Haval.png",
    vehicles: [
      { name: "H9", label: "Haval H9 · Bleu", color: "blue", image: "/images/nav-thumbnails-v2/haval-h9-blue.png" },
      { name: "H9", label: "Haval H9 · Blanc", color: "white", image: "/images/nav-thumbnails-v2/haval-h9-white.png" },
      { name: "H9", label: "Haval H9 · Noir", color: "black", image: "/images/nav-thumbnails-v2/haval-h9-black.png" },
    ],
  },
  {
    id: "tank",
    name: "Tank",
    image: "/images/brands/Tank.png",
    vehicles: [
      { name: "Tank 500", label: "Tank 500 · Beige doré", color: "gold", image: "/images/nav-thumbnails-v2/tank-500-gold.png" },
      { name: "Tank 500", label: "Tank 500 · Argent", color: "silver", image: "/images/nav-thumbnails-v2/tank-500-silver.png" },
      { name: "Tank 500", label: "Tank 500 · Noir", color: "black", image: "/images/nav-thumbnails-v2/tank-500-black.png" },
      { name: "Tank 300", label: "Tank 300 · Gris graphite", color: "graphite", image: "/images/nav-thumbnails-v2/tank-300-graphite.png" },
      { name: "Tank 300", label: "Tank 300 · Orange", color: "orange", image: "/images/nav-thumbnails-v2/tank-300-orange.png?v=20261024-0908" },
      { name: "Tank 300", label: "Tank 300 · Gris clair", color: "gray", image: "/images/nav-thumbnails-v2/tank-300-gray.png?v=20261024" },
      { name: "Tank 300", label: "Tank 300 · Blanc", color: "white", image: "/images/nav-thumbnails-v2/tank-300-white.png?v=20261024" },
    ],
  },
  {
    id: "suzuki",
    name: "Suzuki",
    image: "/images/brands/Suzuki.png",
    vehicles: [
      { name: "Ignis", image: "/images/vehicles/Ignis.png" },
      { name: "Jimny", image: "/images/vehicles/Jimny.png" },
      { name: "S-Cross", image: "/images/vehicles/SCross.png" },
    ],
  },
  {
    id: "jeep",
    name: "Jeep",
    image: "/images/brands/Jeep.png",
    vehicles: [
      { name: "Compass", image: "/images/vehicles/Compass.png" },
      { name: "Gladiator", image: "/images/vehicles/Gladiator.png" },
      { name: "Grand Cherokee", image: "/images/vehicles/GrandCheerokee.png" },
      { name: "Wrangler", image: "/images/vehicles/Wrangler.png" },
    ],
  },
  { id: "ram", name: "RAM", image: "/images/brands/Ram.png" },
  {
    id: "dodge",
    name: "Dodge",
    image: "/images/brands/Dodge.png",
    vehicles: [{ name: "Durango", image: "/images/vehicles/Durango.png" }],
  },
  { id: "chrysler", name: "Chrysler", image: "/images/brands/Chrysler.png" },
  { id: "faw", name: "FAW", image: "/images/brands/FAW.png" },
  { id: "gac", name: "GAC", image: "/images/brands/GAC.png" },
];

const PRELOADED_NAV_IMAGES = BRANDS
  .filter((brand) => ["gwm", "tank", "haval"].includes(brand.id))
  .flatMap((brand) => brand.vehicles?.map((vehicle) => vehicle.image) ?? []);

const GWM_BRAND_IDS = ["gwm", "tank", "haval"];
const GWM_BRANDS = BRANDS.filter((brand) => GWM_BRAND_IDS.includes(brand.id));
const NAV_BRANDS = BRANDS.filter((brand) => !["tank", "haval"].includes(brand.id));

export default function Navbar() {
  const pathname = usePathname();
  const [isBrandsMenuOpen, setIsBrandsMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedGwmBrand, setSelectedGwmBrand] = useState("gwm");
  const [isModelsOpen, setIsModelsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const [mobileSelectedBrand, setMobileSelectedBrand] = useState<string | null>("jetour");
  const [mobileSelectedGwmBrand, setMobileSelectedGwmBrand] = useState("gwm");

  const closeBrandsMenu = () => {
    setIsBrandsMenuOpen(false);
    setSelectedBrand(null);
  };

  const previewBrand = (brand: Brand) => {
    if (!brand.vehicles?.length) return;
    setSelectedBrand(brand.id);
    if (brand.id === "gwm") setSelectedGwmBrand("gwm");
    setIsModelsOpen(true);
  };

  const activeBrand = BRANDS.find((brand) => brand.id === selectedBrand);
  const displayedBrand = selectedBrand === "gwm"
    ? GWM_BRANDS.find((brand) => brand.id === selectedGwmBrand)
    : activeBrand;
  const activeMobileBrand = BRANDS.find((brand) => brand.id === mobileSelectedBrand);
  const displayedMobileBrand = mobileSelectedBrand === "gwm"
    ? GWM_BRANDS.find((brand) => brand.id === mobileSelectedGwmBrand)
    : activeMobileBrand;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div aria-hidden="true" className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
        {PRELOADED_NAV_IMAGES.map((image) => <Image key={image} src={image} alt="" width={220} height={110} sizes="220px" preload />)}
      </div>
      <div className="hidden bg-[#102a56] text-white lg:block">
        <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[11px] font-semibold xl:px-8">
          <div className="flex items-center gap-4 text-blue-50">
            <a href="https://www.google.com/maps/search/?api=1&query=33%2C%20Boulevard%20Toussaint%20Louverture%2C%20Port-au-Prince%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white"><MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#54b834]" />33, Blvd Toussaint Louverture, Port-au-Prince, Haïti</a>
            <a href="https://www.google.com/maps/search/?api=1&query=27%2C%20Bois%20Moquette%2C%20P%C3%A9tion-Ville%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white"><MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#54b834]" />27, rue Bois Moquette, Pétion-Ville, Haïti</a>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-blue-100">
            <a href="tel:+50929403001" className="inline-flex items-center gap-1.5 text-blue-50 transition hover:text-white"><Phone aria-hidden="true" className="h-3.5 w-3.5 text-[#54b834]" />+(509) 2940-3001</a>
            <a href="tel:+50929403005" className="inline-flex items-center gap-1.5 text-blue-50 transition hover:text-white"><Phone aria-hidden="true" className="h-3.5 w-3.5 text-[#54b834]" />+(509) 2940-3005</a>
            <span className="text-[11px] font-semibold text-blue-100">Suivez-nous :</span>
            <div className="flex items-center gap-2" aria-label="Réseaux sociaux">
              <a href="https://www.facebook.com/share/1DgB24C3vG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="flex h-6 w-6 items-center justify-center text-[#54b834] transition-colors hover:text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a24 24 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" /></svg>
              </a>
              <a href="https://www.instagram.com/caribemotorshaiti?cplk=MWJmamp6eHR2cGpvbg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="flex h-6 w-6 items-center justify-center text-[#54b834] transition-colors hover:text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/caribe-motors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="flex h-6 w-6 items-center justify-center text-[#54b834] transition-colors hover:text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 4A1.6 1.6 0 1 0 5.1 7a1.6 1.6 0 0 0 0-3ZM20.3 13.4c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.5H9.7V20h2.8v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h2.8v-6.6Z" /></svg>
              </a>
              <a href="https://wa.me/50929403001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="flex h-6 w-6 items-center justify-center text-[#54b834] transition-colors hover:text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.04.8 1.11-2.96-.19-.31c-.81-1.31-1.24-2.83-1.24-4.5 0-4.54 3.7-8.24 8.24-8.24z" /></svg>
              </a>
              <a href="https://youtube.com/@caribemotorss.a.5259?si=m81mJ9g6VGrX8heQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="flex h-6 w-6 items-center justify-center text-[#54b834] transition-colors hover:text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Caribe Motors — Accueil" className="flex shrink-0 items-center">
          <div className="relative h-12 w-48 sm:h-14 sm:w-56">
            <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill priority className="object-contain object-left" sizes="(max-width: 640px) 192px, 224px" />
          </div>
        </Link>

        <nav aria-label="Navigation principale" onMouseLeave={closeBrandsMenu} className="relative ml-auto hidden items-center gap-8 xl:flex">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={`text-[15px] font-semibold transition hover:text-[#0d4b8e] ${pathname === "/" ? "text-[#54b834]" : "text-[#14223c]"}`}>Accueil</Link>
          <div className="inline-flex items-center gap-1"><Link href="/marques" onMouseEnter={() => setIsBrandsMenuOpen(true)} onFocus={() => setIsBrandsMenuOpen(true)} className={`text-[15px] font-semibold transition hover:text-[#0d4b8e] ${pathname === "/marques" ? "text-[#54b834]" : "text-[#14223c]"}`}>Nos marques</Link><button type="button" aria-label="Ouvrir le menu des marques" aria-expanded={isBrandsMenuOpen} aria-controls="menu-marques" onClick={() => setIsBrandsMenuOpen((open) => !open)} onMouseEnter={() => setIsBrandsMenuOpen(true)} onFocus={() => setIsBrandsMenuOpen(true)} className={`transition hover:text-[#0d4b8e] ${pathname === "/marques" ? "text-[#54b834]" : "text-[#14223c]"}`}><ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${isBrandsMenuOpen ? "rotate-180" : ""}`} /></button></div>
          <Link href="/services" aria-current={pathname === "/services" ? "page" : undefined} className={`text-[15px] font-semibold transition hover:text-[#0d4b8e] ${pathname === "/services" ? "text-[#54b834]" : "text-[#14223c]"}`}>Services</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={`text-[15px] font-semibold transition hover:text-[#0d4b8e] ${pathname === "/contact" ? "text-[#54b834]" : "text-[#14223c]"}`}>Contact</Link>

          {isBrandsMenuOpen && (
            <div id="menu-marques" className="absolute right-0 top-full z-50 w-[880px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
              <div className="flex flex-wrap items-center justify-center gap-2 p-3">
                {NAV_BRANDS.map((brand) => {
                  const hasVehicles = Boolean(brand.vehicles?.length);
                  const isActive = selectedBrand === brand.id;
                  const content = <Image src={brand.image} alt={brand.name} fill sizes="72px" className="object-contain p-1" />;
                  return hasVehicles ? (
                    <button key={brand.id} type="button" aria-label={`Afficher les modèles ${brand.name}`} onMouseEnter={() => previewBrand(brand)} onFocus={() => previewBrand(brand)} onClick={() => previewBrand(brand)} className={`relative flex h-14 w-[72px] items-center justify-center transition-colors ${isActive ? "" : "hover:bg-slate-50"}`}>
                      {content}
                      {isActive && <span aria-hidden="true" className="absolute left-1/2 z-10 -translate-x-1/2" style={{ bottom: 6, width: 56, height: 3, backgroundColor: "#54b834" }} />}
                    </button>
                  ) : (
                    <div key={brand.id} className="relative h-14 w-[72px] opacity-75">{content}</div>
                  );
                })}
              </div>

              {displayedBrand?.vehicles && (
                <div className="border-t border-slate-200 px-5 py-4">
                  <button type="button" onClick={() => setIsModelsOpen((open) => !open)} aria-expanded={isModelsOpen} className="flex w-full items-center justify-between text-left">
                    <span className="flex items-center gap-3">
                      <span className="relative h-7 w-28"><Image src={displayedBrand.image} alt={displayedBrand.name} fill sizes="112px" className="object-contain object-left" /></span>
                      <span className="text-sm font-bold text-[#102a56]">Tous les modèles</span>
                      <span className="text-xs font-medium text-slate-400">{displayedBrand.vehicles.length}</span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#1643aa]"><ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${isModelsOpen ? "rotate-180" : ""}`} /></span>
                  </button>

                  {selectedBrand === "gwm" && (
                    <div className="mt-4 flex items-center gap-3 border-y border-slate-100 py-3">
                      {GWM_BRANDS.map((brand) => {
                        const isSelected = selectedGwmBrand === brand.id;
                        const previewGwmBrand = () => { setSelectedGwmBrand(brand.id); setIsModelsOpen(true); };
                        return <button key={brand.id} type="button" onMouseEnter={previewGwmBrand} onFocus={previewGwmBrand} onClick={previewGwmBrand} aria-pressed={isSelected} className={`relative h-10 w-28 transition-opacity ${isSelected ? "opacity-100" : "opacity-60 hover:opacity-100"}`}><Image src={brand.image} alt={brand.name} fill sizes="112px" className="object-contain" />{isSelected && <span aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: 48, height: 3, backgroundColor: "#54b834" }} />}</button>;
                      })}
                    </div>
                  )}

                  {isModelsOpen && (
                    <><div className="mt-4 grid grid-cols-3 gap-3">
                      {displayedBrand.vehicles.map((vehicle) => (
                        <Link key={vehicle.image} href={vehicleHref(displayedBrand, vehicle)} onClick={closeBrandsMenu} className="rounded-xl p-2.5 transition-colors hover:bg-slate-50">
                          <div className="relative h-20 overflow-hidden"><Image src={vehicle.image} alt={`${displayedBrand.name} ${vehicle.name}`} fill sizes="220px" className="object-contain" /></div>
                          {vehicle.modelLogo ? <span className="relative mt-2 block h-5 w-24"><Image src={vehicle.modelLogo} alt={vehicle.name} fill sizes="96px" className="object-contain object-left" /></span> : <p className="mt-2 text-xs font-bold text-[#102a56]">{vehicle.label ?? vehicle.name}</p>}
                        </Link>
                      ))}
                    </div></>
                  )}
                </div>
              )}
            </div>
          )}
        </nav>

        <button type="button" aria-label="Ouvrir le menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(true)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#102a56] xl:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <button type="button" aria-label="Fermer le menu" onClick={closeMobileMenu} className="absolute inset-0 bg-slate-950/30" />
          <aside className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div className="relative h-11 w-48"><Image src="/images/caribe-logo.png" alt="Caribe Motors" fill sizes="192px" className="object-contain object-left" /></div>
              <button type="button" onClick={closeMobileMenu} aria-label="Fermer le menu" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#102a56]"><X className="h-5 w-5" /></button>
            </div>
            <nav aria-label="Navigation mobile" className="mt-5 space-y-1">
              <Link href="/" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#102a56] hover:bg-slate-50">Accueil</Link>
              <button type="button" onClick={() => setIsMobileBrandsOpen((open) => !open)} aria-expanded={isMobileBrandsOpen} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-[#102a56] hover:bg-slate-50">
                Nos marques <ChevronDown className={`h-4 w-4 transition-transform ${isMobileBrandsOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobileBrandsOpen && (
                <div className="rounded-2xl bg-slate-50 p-3">
                  <Link href="/marques" onClick={closeMobileMenu} className="mb-3 block bg-[#54b834] px-3 py-2 text-center text-xs font-bold text-white transition-colors hover:bg-[#469f2d]">Voir toutes nos marques</Link>
                  <div className="grid grid-cols-4 gap-2">
                    {NAV_BRANDS.filter((brand) => brand.vehicles?.length).map((brand) => {
                      const isActive = mobileSelectedBrand === brand.id;
                      return <button key={brand.id} type="button" onClick={() => setMobileSelectedBrand(brand.id)} aria-label={`Afficher les modèles ${brand.name}`} aria-pressed={isActive} className="relative h-12 bg-white"><Image src={brand.image} alt={brand.name} fill sizes="72px" className="object-contain p-2" />{isActive && <span aria-hidden="true" className="absolute left-1/2 z-10 -translate-x-1/2" style={{ bottom: 4, width: 40, height: 3, backgroundColor: "#54b834" }} />}</button>;
                    })}
                  </div>
                  {mobileSelectedBrand === "gwm" && (
                    <div className="mt-4 grid grid-cols-3 gap-2 border-y border-slate-200 py-3">
                      {GWM_BRANDS.map((brand) => {
                        const isSelected = mobileSelectedGwmBrand === brand.id;
                        return <button key={brand.id} type="button" onClick={() => setMobileSelectedGwmBrand(brand.id)} aria-pressed={isSelected} className="relative h-9 bg-white"><Image src={brand.image} alt={brand.name} fill sizes="96px" className="object-contain" />{isSelected && <span aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: 36, height: 3, backgroundColor: "#54b834" }} />}</button>;
                      })}
                    </div>
                  )}

                  {displayedMobileBrand?.vehicles && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {displayedMobileBrand.vehicles.map((vehicle) => (
                        <Link key={vehicle.image} href={vehicleHref(displayedMobileBrand, vehicle)} onClick={closeMobileMenu} className="rounded-xl bg-white p-2.5">
                          <div className="relative h-16"><Image src={vehicle.image} alt={`${displayedMobileBrand.name} ${vehicle.name}`} fill sizes="150px" className="object-contain" /></div>
                          {vehicle.modelLogo ? <span className="relative mt-1 block h-4 w-20"><Image src={vehicle.modelLogo} alt={vehicle.name} fill sizes="80px" className="object-contain object-left" /></span> : <p className="mt-1 text-xs font-bold text-[#102a56]">{vehicle.label ?? vehicle.name}</p>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Link href="/services" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#102a56] hover:bg-slate-50">Services</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#102a56] hover:bg-slate-50">Contact</Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
