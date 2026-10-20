"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const SERVICES = [
  "Entretien périodique",
  "Réparation mécanique",
  "Diagnostic électronique",
  "Lavage & esthétique",
  "Carrosserie & peinture",
  "Pneus & freinage",
  "Autre demande",
];

export default function ContactRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const message = [
      "Bonjour Caribe Motors, je souhaite demander un devis.",
      "",
      `Nom : ${formData.get("firstName")} ${formData.get("lastName")}`,
      `E-mail : ${formData.get("email")}`,
      `Téléphone : ${formData.get("phone")}`,
      `Service : ${formData.get("service")}`,
      `Message : ${formData.get("message")}`,
    ].join("\n");

    window.open(`https://wa.me/50929403001?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-[#172760]">
        Prénom <span className="text-[#278218]">*</span>
        <input name="firstName" required autoComplete="given-name" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10" placeholder="Votre prénom" />
      </label>
      <label className="block text-sm font-semibold text-[#172760]">
        Nom <span className="text-[#278218]">*</span>
        <input name="lastName" required autoComplete="family-name" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10" placeholder="Votre nom" />
      </label>
      <label className="block text-sm font-semibold text-[#172760]">
        E-mail <span className="text-[#278218]">*</span>
        <input name="email" type="email" required autoComplete="email" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10" placeholder="vous@exemple.com" />
      </label>
      <label className="block text-sm font-semibold text-[#172760]">
        Téléphone <span className="text-[#278218]">*</span>
        <input name="phone" type="tel" required autoComplete="tel" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10" placeholder="(509) 0000-0000" />
      </label>
      <label className="block text-sm font-semibold text-[#172760] sm:col-span-2">
        Service souhaité <span className="text-[#278218]">*</span>
        <select name="service" required defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-700 outline-none transition focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10">
          <option value="" disabled>Sélectionnez un service</option>
          {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </label>
      <label className="block text-sm font-semibold text-[#172760] sm:col-span-2">
        Votre demande <span className="text-[#278218]">*</span>
        <textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#54b834] focus:ring-4 focus:ring-[#54b834]/10" placeholder="Décrivez votre véhicule et le service souhaité." />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1643aa] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#102a56] disabled:cursor-wait disabled:opacity-70">
          <Send className="h-4 w-4" aria-hidden="true" />
          {isSubmitting ? "Préparation de votre demande..." : "Demander un devis via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
