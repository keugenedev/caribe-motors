import type { Metadata } from "next";
import Image from "next/image";
import {
  AirVent,
  BatteryCharging,
  CalendarCheck,
  CarFront,
  CircleGauge,
  Droplets,
  Paintbrush,
  PhoneCall,
  Wrench,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  description: "Entretien, réparation, lavage et services automobiles professionnels chez Caribe Motors.",
};

const SERVICES = [
  {
    name: "Réparation mécanique",
    description: "Interventions fiables par des techniciens qualifiés pour garder votre véhicule en parfait état.",
    icon: Wrench,
  },
  {
    name: "Entretien périodique",
    description: "Vidange, filtres, niveaux et contrôles essentiels selon les besoins de votre véhicule.",
    icon: CalendarCheck,
  },
  {
    name: "Diagnostic électronique",
    description: "Lecture des alertes et contrôle précis des systèmes électroniques de votre véhicule.",
    icon: CircleGauge,
  },
  {
    name: "Lavage & esthétique",
    description: "Lavage intérieur et extérieur pour redonner à votre véhicule une présentation impeccable.",
    icon: Droplets,
  },
  {
    name: "Carrosserie & peinture",
    description: "Soins de carrosserie, retouches et remise en beauté avec une finition soignée.",
    icon: Paintbrush,
  },
  {
    name: "Pneus & freinage",
    description: "Contrôle des pneus, équilibrage et inspection du système de freinage pour votre sécurité.",
    icon: CarFront,
  },
  {
    name: "Climatisation",
    description: "Vérification et entretien de la climatisation pour un habitacle toujours confortable.",
    icon: AirVent,
  },
  {
    name: "Batterie & électricité",
    description: "Tests de batterie et interventions sur le système électrique de votre véhicule.",
    icon: BatteryCharging,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#172760]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#102a56] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
          <Image src="/images/services-hero.png" alt="Atelier Caribe Motors" fill priority sizes="100vw" className="object-cover object-[center_10%]" />
          <div className="absolute inset-0 bg-[#102a56]/75" />
          <Reveal className="relative mx-auto max-w-7xl">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"><WordReveal text="Nos services automobiles" stagger={0.24} duration={0.7} /></h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              <WordReveal text="De l’entretien courant à la réparation, notre équipe prend soin de votre véhicule avec professionnalisme." delay={1.35} stagger={0.085} duration={0.5} />
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#54b834]"><WordReveal text="Tout pour votre véhicule" stagger={0.18} /></p>
              <h2 className="mt-2 text-2xl font-bold text-[#102a56] sm:text-3xl"><WordReveal text="Un service adapté à chaque besoin" delay={0.65} stagger={0.18} duration={0.68} /></h2>
              <p className="mt-3 text-sm leading-6 text-slate-500"><WordReveal text="Sélectionnez le service dont vous avez besoin ; notre équipe vous accompagne." delay={1.75} stagger={0.075} duration={0.48} /></p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.name} delay={index * 0.12} className="h-full">
                    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-base font-bold text-[#102a56]"><WordReveal text={service.name} stagger={0.14} duration={0.52} /></h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500"><WordReveal text={service.description} delay={0.45} stagger={0.05} duration={0.4} /></p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#eaf3ff] px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#102a56]"><WordReveal text="Confiez votre véhicule à Caribe Motors" stagger={0.18} duration={0.65} /></h2>
              <p className="mt-2 text-sm text-slate-600"><WordReveal text="Notre équipe est disponible pour vous orienter vers le bon service." delay={1.2} stagger={0.075} duration={0.48} /></p>
            </div>
            <a href="tel:+50929403001" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1643aa] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#102a56]">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Nous appeler
            </a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
