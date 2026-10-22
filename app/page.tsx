import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealerHome from "@/components/DealerHome";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      <Navbar />
      <main className="flex flex-1 flex-col"><DealerHome /></main>
      <Footer />
    </div>
  );
}
