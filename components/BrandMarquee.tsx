import Image from "next/image";
import WordReveal from "@/components/WordReveal";

const BRANDS = [
  { name: "Jetour", image: "/images/brands/jetour.png" },
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
  { name: "FAW", image: "/images/brands/FAW.png" },
  { name: "GAC", image: "/images/brands/GAC.png" },
];

export default function BrandMarquee() {
  return (
    <section id="marques" className="relative w-full overflow-hidden border-t border-slate-100 py-10 sm:py-12 bg-gradient-to-b from-white via-slate-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 mb-7">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#54b834]">
          <WordReveal text="Distributeur Agréé" stagger={0.18} />
        </span>
        <h2 className="mt-1 text-lg font-bold uppercase tracking-wider text-[#102a56]/90 sm:text-xl">
          <WordReveal text="Nos Marques" delay={0.5} stagger={0.22} duration={0.68} />
        </h2>
      </div>

      {/* Container with ultra-wide soft gradient fades on both sides */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]">
        {/* Left ultra-soft fade overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-32 sm:w-56 bg-gradient-to-r from-white via-white/80 to-transparent" />
        {/* Right ultra-soft fade overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-32 sm:w-56 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Slow, gentle, silky continuous track from right to left */}
        <div className="marquee-track flex w-max items-center py-3">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex shrink-0 items-center justify-center px-8 sm:px-12 opacity-65 transition-all duration-500 hover:opacity-100 hover:scale-105"
            >
              <div className="relative h-10 w-28 sm:h-12 sm:w-32">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 3), 0, 0);
          }
        }
        .marquee-track {
          animation: scrollRightToLeft 52s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
