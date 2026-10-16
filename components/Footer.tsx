import Image from "next/image";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#54b834]/15 text-[#75d259]">{children}</span>
);

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1c3a68] bg-[#102a56] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1.45fr] lg:px-8">
        <div>
          <div className="relative h-12 w-48">
            <Image src="/images/caribe-logo.png" alt="Caribe Motors" fill className="object-contain object-left brightness-0 invert" sizes="192px" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">Votre partenaire automobile de confiance en Haïti. Découvrez nos véhicules, nos services et notre accompagnement personnalisé.</p>
          <p className="mt-5 text-xs font-semibold text-[#75d259]">Concessionnaire automobile · Haïti</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-4 space-y-3">
              <a href="https://www.caribe-motors.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-blue-100 transition hover:text-white"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></Icon><span>www.caribe-motors.com</span></a>
              <a href="mailto:info@caribe-motors.com" className="group flex items-center gap-3 text-sm text-blue-100 transition hover:text-white"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></Icon><span>info@caribe-motors.com</span></a>
              <div className="flex items-center gap-3 text-sm text-blue-100"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4Z" /></svg></Icon><span><a href="tel:+50929403001" className="transition hover:text-white">(509) 2940-3001</a><span className="mx-1.5 text-blue-300">·</span><a href="tel:+50929403005" className="transition hover:text-white">(509) 2940-3005</a></span></div>
            </div>
          </section>

          <section aria-labelledby="footer-addresses">
            <h2 id="footer-addresses" className="text-sm font-semibold text-white">Nos adresses</h2>
            <div className="mt-4 space-y-3">
              <a href="https://www.google.com/maps/search/?api=1&query=33%2C%20Boulevard%20Toussaint%20Louverture%2C%20Port-au-Prince%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="group flex gap-3 text-sm leading-5 text-blue-100 transition hover:text-white"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></Icon><span>33, Blvd Toussaint Louverture,<br />Port-au-Prince, Haïti</span></a>
              <a href="https://www.google.com/maps/search/?api=1&query=27%2C%20Bois%20Moquette%2C%20P%C3%A9tion-Ville%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="group flex gap-3 text-sm leading-5 text-blue-100 transition hover:text-white"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></Icon><span>27, Bois Moquette,<br />Pétion-Ville, Haïti</span></a>
            </div>
          </section>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>© {new Date().getFullYear()} Caribe Motors. Tous droits réservés.</span><span>Service & pièces en Haïti</span></div>
      </div>
    </footer>
  );
}
