import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VehicleConfigurator from "@/components/VehicleConfigurator";

export const metadata: Metadata = {
  title: "Nos véhicules",
  description: "Découvrez les véhicules disponibles chez Caribe Motors et personnalisez votre Jetour T1.",
};

export default function VehiclesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      <Navbar />
      <main className="flex-1"><VehicleConfigurator /></main>
      <Footer />
    </div>
  );
}
