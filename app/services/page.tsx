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
          <div className="relative mx-auto max-w-7xl">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Nos services automobiles</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              De l&apos;entretien courant à la réparation, notre équipe prend soin de votre véhicule avec professionnalisme.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#54b834]">Tout pour votre véhicule</p>
              <h2 className="mt-2 text-2xl font-bold text-[#102a56] sm:text-3xl">Un service adapté à chaque besoin</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">Sélectionnez le service dont vous avez besoin ; notre équipe vous accompagne.</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-[#102a56]">{service.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#eaf3ff] px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#102a56]">Confiez votre véhicule à Caribe Motors</h2>
              <p className="mt-2 text-sm text-slate-600">Notre équipe est disponible pour vous orienter vers le bon service.</p>
            </div>
            <a href="tel:+50929403001" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1643aa] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#102a56]">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Nous appeler
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
