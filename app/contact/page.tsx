import type { Metadata } from "next";
import Image from "next/image";
import {
  ClipboardList,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import ContactRequestForm from "@/components/ContactRequestForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  description: "Contactez Caribe Motors à Port-au-Prince et Pétion-Ville.",
};

const LOCATIONS = [
  {
    name: "Port-au-Prince",
    address: "33, Boulevard Toussaint Louverture, Port-au-Prince, Haïti",
    url: "https://www.google.com/maps/search/?api=1&query=33%2C%20Boulevard%20Toussaint%20Louverture%2C%20Port-au-Prince%2C%20Haiti",
  },
  {
    name: "Pétion-Ville",
    address: "27, Bois Moquette, Pétion-Ville, Haïti",
    url: "https://www.google.com/maps/search/?api=1&query=27%2C%20Bois%20Moquette%2C%20P%C3%A9tion-Ville%2C%20Haiti",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#172760]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#102a56] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
          <Image src="/images/services-hero.png" alt="Atelier Caribe Motors" fill priority sizes="100vw" className="object-cover object-[center_10%]" />
          <div className="absolute inset-0 bg-[#102a56]/75" />
          <Reveal className="relative mx-auto max-w-7xl">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"><WordReveal text="Contactez-nous" stagger={0.24} duration={0.7} /></h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg"><WordReveal text="Notre équipe est à votre écoute pour vos questions, vos véhicules et vos demandes de services." delay={0.65} stagger={0.085} duration={0.5} /></p>
          </Reveal>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <Reveal delay={0} className="h-full"><a href="tel:+50929403001" className="block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><Phone className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]"><WordReveal text="Appelez-nous" stagger={0.16} duration={0.56} /></h2>
              <p className="mt-2 text-sm text-slate-500"><WordReveal text="(509) 2940-3001 · (509) 2940-3005" delay={0.4} stagger={0.08} duration={0.45} /></p>
            </a></Reveal>
            <Reveal delay={0.14} className="h-full"><a href="mailto:info@caribe-motors.com" className="block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><Mail className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]"><WordReveal text="Écrivez-nous" stagger={0.16} duration={0.56} /></h2>
              <p className="mt-2 text-sm text-slate-500"><WordReveal text="info@caribe-motors.com" delay={0.4} stagger={0.08} duration={0.45} /></p>
            </a></Reveal>
            <Reveal delay={0.28} className="h-full"><a href="https://wa.me/50929403001" target="_blank" rel="noreferrer" className="block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><MessageCircle className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]"><WordReveal text="WhatsApp" stagger={0.16} duration={0.56} /></h2>
              <p className="mt-2 text-sm text-slate-500"><WordReveal text="Discutez directement avec notre équipe." delay={0.4} stagger={0.08} duration={0.45} /></p>
            </a></Reveal>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <Reveal className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-[#edf4ff] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1643aa] shadow-sm"><ClipboardList className="h-6 w-6" aria-hidden="true" /></span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#278218]"><WordReveal text="Demande de service" stagger={0.16} /></p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#102a56]"><WordReveal text="Demander un devis" delay={0.5} stagger={0.2} duration={0.68} /></h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600"><WordReveal text="Indiquez le service dont vous avez besoin. Votre demande sera préparée dans WhatsApp pour être envoyée directement à notre équipe." delay={1.2} stagger={0.065} duration={0.45} /></p>
            </div>
            <ContactRequestForm />
          </Reveal>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1643aa]"><MapPinned className="h-5 w-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#54b834]"><WordReveal text="Nos succursales" stagger={0.16} /></p>
                <h2 className="mt-1 text-2xl font-bold text-[#102a56]"><WordReveal text="Venez nous rencontrer" delay={0.5} stagger={0.18} duration={0.65} /></h2>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {LOCATIONS.map((location) => (
                <a key={location.name} href={location.url} target="_blank" rel="noreferrer" className="group flex gap-4 rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1643aa] shadow-sm"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-bold text-[#102a56]"><WordReveal text={location.name} stagger={0.16} duration={0.56} /></span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500"><WordReveal text={location.address} delay={0.4} stagger={0.055} duration={0.42} /></span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#278218]"><WordReveal text="Voir l’itinéraire" delay={1.25} stagger={0.1} duration={0.45} /> <Send className="h-3.5 w-3.5" aria-hidden="true" /></span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
