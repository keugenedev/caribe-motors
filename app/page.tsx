import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMarquee from "@/components/BrandMarquee";
import HomeVehicleHero from "@/components/HomeVehicleHero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HomeVehicleHero />
        <BrandMarquee />
      </main>
      <Footer />
    </div>
  );
}
