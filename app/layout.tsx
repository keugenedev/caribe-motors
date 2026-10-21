import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caribe Motors",
  description: "Découvrez la nouvelle gamme Jetour chez Caribe Motors. Choisissez votre modèle et personnalisez votre couleur en direct.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#172760] selection:bg-[#dbe6ff] selection:text-[#172760]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
