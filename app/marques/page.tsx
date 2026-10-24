import type { Metadata } from "next";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";
import HomeVehicleHero from "@/components/HomeVehicleHero";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nos marques | Caribe Motors",
  description: "Découvrez les marques disponibles chez Caribe Motors.",
};

export default function BrandsPage() {
  const brands = ["Chery", "Jetour", "GWM", "Haval", "Tank", "Suzuki", "Jeep", "Dodge"];

  return <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]"><Navbar /><main className="flex flex-1 flex-col">{brands.map((brand) => <HomeVehicleHero key={brand} brand={brand} showActions />)}<BrandMarquee /></main><Footer /></div>;
}
