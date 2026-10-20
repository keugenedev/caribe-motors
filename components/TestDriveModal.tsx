"use client";

import { useState } from "react";
import Image from "next/image";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  carModel: string;
  carColor: string;
  carImage: string;
}

export default function TestDriveModal({
  isOpen,
  onClose,
  carModel,
  carColor,
  carImage,
}: TestDriveModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showroom, setShowroom] = useState("Delmas 33 - Showroom Principal");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Bonjour Caribe Motors, je souhaite réserver un essai routier pour le *${carModel}* (Couleur: ${carColor}).\nNom: ${name || "Client"}\nTéléphone: ${phone || "Non précisé"}\nShowroom: ${showroom}\nDate: ${date || "Dès que possible"}`;
    const url = `https://wa.me/50929403001?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#10141e] shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition"
          aria-label="Fermer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#e51a2c]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#e51a2c]">
                Caribe Motors Haïti
              </span>
            </div>

            <h3 className="text-2xl font-black text-white tracking-tight">
              Réserver Votre Essai Privilège
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Vivez l&apos;expérience de conduite Jetour au volant de votre configuration.
            </p>

            {/* Selected Car Preview Card */}
            <div className="my-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-24 flex-shrink-0">
                  <Image
                    src={carImage}
                    alt={carModel}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">{carModel}</h4>
                  <p className="text-xs text-zinc-400">Teinte : <span className="text-zinc-200 font-medium">{carColor}</span></p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                Disponible
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Jean-Luc Pierre"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-[#0047ab] focus:outline-none focus:ring-1 focus:ring-[#0047ab]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Numéro de Téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+509 ---- ----"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-[#0047ab] focus:outline-none focus:ring-1 focus:ring-[#0047ab]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Showroom Caribe
                  </label>
                  <select
                    value={showroom}
                    onChange={(e) => setShowroom(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#161b26] px-3 py-2.5 text-xs text-white focus:border-[#0047ab] focus:outline-none"
                  >
                    <option value="Delmas 33 - Showroom Principal">Delmas 33 (Showroom)</option>
                    <option value="Route de l'Aéroport">Route de l&apos;Aéroport</option>
                    <option value="Cap-Haïtien">Cap-Haïtien</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Date Souhaitée
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#161b26] px-3 py-2 text-xs text-white focus:border-[#0047ab] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#e51a2c] to-[#ff3b4e] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
                >
                  Confirmer la demande d&apos;essai
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition cursor-pointer"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.04.8 1.11-2.96-.19-.31c-.81-1.31-1.24-2.83-1.24-4.5 0-4.54 3.7-8.24 8.24-8.24z" />
                  </svg>
                  Contacter un conseiller via WhatsApp
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white">Demande Enregistrée !</h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Merci <span className="font-semibold text-white">{name}</span>. Un conseiller commercial Caribe Motors vous contactera dans les plus brefs délais pour confirmer l&apos;essai de votre <span className="text-red-400 font-semibold">{carModel}</span>.
            </p>
            <div className="pt-4 flex gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
              >
                Ouvrir WhatsApp
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="flex-1 rounded-xl bg-white/10 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-white/20 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
