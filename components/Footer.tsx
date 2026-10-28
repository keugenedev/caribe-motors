import Image from "next/image";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#54b834]/15 text-[#75d259]">{children}</span>
);

const SOCIAL_NETWORKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DgB24C3vG/?mibextid=wwXIfr",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a24 24 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/caribemotorshaiti?cplk=MWJmamp6eHR2cGpvbg==",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/caribe-motors-sa/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 4A1.6 1.6 0 1 0 5.1 7a1.6 1.6 0 0 0 0-3ZM20.3 13.4c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.5H9.7V20h2.8v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h2.8v-6.6Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/50929403001",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.04.8 1.11-2.96-.19-.31c-.81-1.31-1.24-2.83-1.24-4.5 0-4.54 3.7-8.24 8.24-8.24z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@caribemotorss.a.5259?si=m81mJ9g6VGrX8heQ",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1c3a68] bg-[#102a56] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1.45fr] lg:px-8">
        <div>
          <div className="relative h-12 w-48">
            <Image src="/images/crb.png?v=20261024-0900" alt="Caribe Motors" fill className="object-contain object-left" sizes="192px" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">Votre partenaire automobile de confiance en Haïti. Découvrez nos véhicules, nos services et notre accompagnement personnalisé.</p>
          <p className="mt-5 text-xs font-semibold text-[#75d259]">Concessionnaire automobile · Haïti</p>
        </div>

        <div className="flex flex-col justify-between gap-6">
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
                <a href="https://www.google.com/maps/search/?api=1&query=27%2C%20Bois%20Moquette%2C%20P%C3%A9tion-Ville%2C%20Haiti" target="_blank" rel="noopener noreferrer" className="group flex gap-3 text-sm leading-5 text-blue-100 transition hover:text-white"><Icon><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></Icon><span>27, rue Bois Moquette,<br />Pétion-Ville, Haïti</span></a>
              </div>
            </section>
          </div>

          {/* Social networks placed on the right */}
          <div className="flex items-center justify-start sm:justify-end gap-3 pt-4 border-t border-white/10">
            <span className="text-xs font-semibold text-blue-200">Suivez-nous :</span>
            <div className="flex items-center gap-2">
              {SOCIAL_NETWORKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-[#54b834] hover:text-white hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line: Clean, without social icons on the same line */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 text-xs text-blue-200 sm:justify-start sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Caribe Motors. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
