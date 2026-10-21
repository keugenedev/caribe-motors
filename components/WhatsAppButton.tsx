import { MessageCircle, Phone } from "lucide-react";

const whatsappUrl = "https://wa.me/50946299878";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Caribe Motors sur WhatsApp"
      title="Écrivez-nous sur WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.42)] transition duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:bottom-7 sm:right-7 sm:h-16 sm:w-auto sm:px-5"
    >
      <span aria-hidden="true" className="relative flex h-7 w-7 items-center justify-center">
        <MessageCircle className="h-7 w-7 fill-white text-white" strokeWidth={1.8} />
        <Phone className="absolute h-3.5 w-3.5 text-[#25D366]" strokeWidth={3} />
      </span>
      <span className="ml-2 hidden text-sm font-bold sm:inline">WhatsApp</span>
      <span className="sr-only">+509 46 29 9878</span>
    </a>
  );
}
