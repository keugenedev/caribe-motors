import type { Metadata } from "next";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";
import HomeVehicleHero from "@/components/HomeVehicleHero";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nos véhicules",
  description: "Découvrez les véhicules disponibles chez Caribe Motors, demandez un essai et consultez les informations de chaque modèle.",
};

export default function VehiclesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      <Navbar />
      <main className="flex flex-1 flex-col"><HomeVehicleHero showActions /><BrandMarquee /></main>
      <Footer />
    </div>
  );
}
