import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  description: "Découvrez le GWM P300 dans la galerie Caribe Motors.",
};

type CatalogueImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const P300_PAGES: CatalogueImage[] = Array.from({ length: 19 }, (_, index) => {
  const page = index + 1;
  const isCover = page === 1;
  const isBackCover = page === 19;

  return {
    src: `/images/gallery/gwm-p300/p300-${String(page).padStart(2, "0")}.jpg`,
    alt: `GWM P300 — page ${page}`,
    width: isCover ? 2573 : isBackCover ? 16079 : 5145,
    height: isCover ? 1819 : isBackCover ? 5684 : 1819,
  };
});

const COMMERCIAL_PAGES: CatalogueImage[] = Array.from({ length: 12 }, (_, index) => {
  const page = index + 1;
  const isBackCover = page === 12;

  return {
    src: `/images/gallery/gwm-p-series/commercial-${String(page).padStart(2, "0")}.jpg`,
    alt: `GWM P-Series Commercial — page ${page}`,
    width: isBackCover ? 6459 : 2067,
    height: isBackCover ? 4553 : 1457,
  };
});

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#172760]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#102a56] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <Image src="/images/gallery/gwm-p300/p300-01.jpg" alt="GWM P300" fill priority sizes="100vw" className="object-cover object-[center_45%]" />
          <div className="absolute inset-0 bg-[#102a56]/75" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#75d259]">Galerie véhicules</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">GWM P300</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">Explorez le design, les capacités et les détails du nouveau pick-up GWM P300.</p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#54b834]">En images</p>
              <h2 className="mt-2 text-2xl font-bold text-[#102a56] sm:text-3xl">Catalogues GWM complets</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Toutes les pages sont affichées sans recadrage. Cliquez sur une image pour l’ouvrir en grand format.</p>
            </div>

            <section aria-labelledby="p300-catalogue">
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 id="p300-catalogue" className="text-xl font-bold text-[#102a56]">GWM P300</h3>
                <span className="text-sm font-medium text-slate-400">{P300_PAGES.length} pages</span>
              </div>
              <div className="space-y-6">
                {P300_PAGES.map((image) => <CataloguePage key={image.src} image={image} />)}
              </div>
            </section>

            <section aria-labelledby="commercial-catalogue" className="mt-16 border-t border-slate-200 pt-12">
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 id="commercial-catalogue" className="text-xl font-bold text-[#102a56]">GWM P-Series Commercial</h3>
                <span className="text-sm font-medium text-slate-400">{COMMERCIAL_PAGES.length} pages</span>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {COMMERCIAL_PAGES.map((image) => <CataloguePage key={image.src} image={image} />)}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CataloguePage({ image }: { image: CatalogueImage }) {
  return (
    <figure className="relative overflow-hidden" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <a href={image.src} target="_blank" rel="noreferrer" className="absolute inset-0 block" aria-label={`Ouvrir ${image.alt} en grand format`}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1280px) 100vw, 1200px" className="object-contain" />
      </a>
    </figure>
  );
}
