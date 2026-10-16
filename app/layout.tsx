import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caribe Motors | Jetour - Drive Your Future",
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#172760] selection:bg-[#dbe6ff] selection:text-[#172760]">
        {children}
      </body>
    </html>
  );
}
