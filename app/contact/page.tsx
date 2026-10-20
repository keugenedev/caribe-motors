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
          <div className="relative mx-auto max-w-7xl">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Contactez-nous</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">Notre équipe est à votre écoute pour vos questions, vos véhicules et vos demandes de services.</p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <a href="tel:+50929403001" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><Phone className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]">Appelez-nous</h2>
              <p className="mt-2 text-sm text-slate-500">(509) 2940-3001 · (509) 2940-3005</p>
            </a>
            <a href="mailto:info@caribe-motors.com" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><Mail className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]">Écrivez-nous</h2>
              <p className="mt-2 text-sm text-slate-500">info@caribe-motors.com</p>
            </a>
            <a href="https://wa.me/50929403001" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#54b834]/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#54b834]/12 text-[#278218]"><MessageCircle className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-base font-bold text-[#102a56]">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-500">Discutez directement avec notre équipe.</p>
            </a>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-[#edf4ff] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1643aa] shadow-sm"><ClipboardList className="h-6 w-6" aria-hidden="true" /></span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#278218]">Demande de service</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#102a56]">Demander un devis</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">Indiquez le service dont vous avez besoin. Votre demande sera préparée dans WhatsApp pour être envoyée directement à notre équipe.</p>
            </div>
            <ContactRequestForm />
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1643aa]"><MapPinned className="h-5 w-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#54b834]">Nos succursales</p>
                <h2 className="mt-1 text-2xl font-bold text-[#102a56]">Venez nous rencontrer</h2>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {LOCATIONS.map((location) => (
                <a key={location.name} href={location.url} target="_blank" rel="noreferrer" className="group flex gap-4 rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1643aa] shadow-sm"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-bold text-[#102a56]">{location.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">{location.address}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#278218]">Voir l’itinéraire <Send className="h-3.5 w-3.5" aria-hidden="true" /></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
