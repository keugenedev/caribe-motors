import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JetourExperience from "@/components/JetourExperience";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Expérience Jetour 2D et 720°",
  description: "Explorez les modèles Jetour en 2D et découvrez l’habitacle 720° du Dashing chez Caribe Motors.",
};

export default function JetourExperiencePage() {
  return <div className="min-h-screen bg-[#07131d]"><Navbar /><main><JetourExperience /></main><Footer /></div>;
}
