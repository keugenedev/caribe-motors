import type { Metadata } from "next";
import BrandScroller from "@/components/BrandScroller";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nos marques | Caribe Motors",
  description: "Découvrez les marques disponibles chez Caribe Motors.",
};

export default function BrandsPage() {
  return <div className="min-h-screen bg-[#fcfcfc]"><Navbar /><main><BrandScroller /></main><Footer /></div>;
}
