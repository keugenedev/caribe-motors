import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import FinanceCalculator from "@/components/FinanceCalculator";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Financement | Caribe Motors",
  description: "Estimez simplement le financement de votre prochain véhicule avec Caribe Motors.",
};

export default function FinancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#172760]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#102a56] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
          <Image src="/images/services-hero.png" alt="Caribe Motors" fill priority sizes="100vw" className="object-cover object-[center_10%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[#102a56]/75" />
          <Reveal className="relative mx-auto max-w-7xl">
            <h1 className="max-w-none text-4xl font-bold tracking-tight sm:text-5xl"><WordReveal text="Un financement clair, pensé pour vous." stagger={0.24} duration={0.7} /></h1>
            <p className="mt-4 max-w-4xl text-base leading-7 text-blue-100 sm:text-lg"><WordReveal text="Ajustez les informations de votre projet et obtenez en un instant une estimation de votre paiement mensuel." delay={0.65} stagger={0.085} duration={0.5} /></p>
          </Reveal>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <FinanceCalculator />
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:px-6 sm:py-5">
            {[
              "Calcul instantané",
              "Assurance incluse",
              "Conseiller à votre écoute",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 whitespace-nowrap text-sm leading-6 text-slate-600">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#54b834]" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
