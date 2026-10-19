"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CarShowcase from "@/components/CarShowcase";
import TestDriveModal from "@/components/TestDriveModal";
import Footer from "@/components/Footer";
import BrandMarquee from "@/components/BrandMarquee";

export default function Home() {
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [modalData, setModalData] = useState({
    model: "JETOUR T1",
    color: "Noir Onyx",
    image: "/images/jetour/t1-black.png",
  });

  const handleOpenTestDrive = (
    model = "JETOUR T1",
    color = "Noir Onyx",
    image = "/images/jetour/t1-black.png"
  ) => {
    setModalData({ model, color, image });
    setIsTestDriveOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#172760]">
      {/* 1. Navbar with Caribe Motors Logo */}
      <Navbar />

      {/* 2. Jetour Car & Color Customizer + Nos Marques */}
      <main className="flex flex-1 flex-col">
        <CarShowcase onOpenTestDrive={handleOpenTestDrive} />
        <BrandMarquee />
      </main>

      <Footer />

      {/* 3. Interactive Test Drive Booking Modal */}
      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        carModel={modalData.model}
        carColor={modalData.color}
        carImage={modalData.image}
      />
    </div>
  );
}
