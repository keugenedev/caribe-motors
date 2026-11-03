import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLaunch from "@/components/HomeLaunch";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      <Navbar />
      <main className="flex flex-1 flex-col"><HomeLaunch /></main>
      <Footer />
    </div>
  );
}
