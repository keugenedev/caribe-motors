const whatsappUrl = "https://wa.me/50946299878";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Caribe Motors sur WhatsApp"
      title="Écrivez-nous sur WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 fill-white sm:h-9 sm:w-9">
        <path d="M16 3a12.9 12.9 0 0 0-11 19.64L3.65 28.3l5.83-1.53A12.98 12.98 0 1 0 16 3Zm0 23.65a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.46.91.93-3.37-.25-.4A10.67 10.67 0 1 1 16 26.65Zm5.86-8.02c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="sr-only">+509 46 29 9878</span>
    </a>
  );
}
