"use client";

import { useEffect, useState } from "react";

import TopBar from "@/app/components/layout/TopBar";
import MainHeader from "@/app/components/layout/MainHeader";
import Footer from "@/app/components/layout/Footer";

import HogaresSubMenu from "@/app/components/navigation/hogares/HogaresSubMenu";

import HogaresHero from "@/app/components/sections/hogares/HogaresHero";
import HogaresInfo from "@/app/components/sections/hogares/HogaresInfo";
import HogaresServices from "@/app/components/sections/hogares/HogaresServices";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <main>

      {/* TOPBAR ANIMADA */}
      <div
        className={`relative transition-all duration-500 ${
          scrolled
            ? "h-0 opacity-0"
            : "h-auto opacity-100"
        }`}
      >
        <TopBar />
      </div>

      {/* HEADER */}
      <MainHeader />

      {/* SUBMENU HOGARES */}
      <HogaresSubMenu />

      {/* CONTENIDO HOGARES */}
      <HogaresHero />
      <HogaresInfo />
      <HogaresServices />

      <Footer />

    </main>
  );
}