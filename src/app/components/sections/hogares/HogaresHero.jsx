"use client";

import { useState, useEffect } from "react";

export default function Hero() {

  const slides = [
    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/2X2ZgTP99URf9CthDB4nLd/cedfc894aa89c03b91986d2bb382ace4/BANNER_1920x600.png",
      title: "Soluciones de gas natural para tu hogar",
      text: "Descubre todos nuestros servicios y soluciones energéticas de forma rápida y segura.",
      button: "Conoce más",
    },

    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/2vrYweaKthR7QQ9e18m4ex/d2690556d31909e8f0bbcd078e68412b/BANNER_AUTOGESTION.png",
      title: "Gestiona tu servicio fácilmente",
      text: "Todo en línea, rápido y seguro para que tengas el control cuando lo necesites.",
      button: "Ver servicios",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[620px] overflow-hidden">

      {/* IMAGEN */}
      <img
        src={slides[current].img}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* OVERLAY PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-[1200px] mx-auto w-full px-10">

          <div className="max-w-[620px] text-white">

            <p className="uppercase tracking-[3px] text-sm text-[#f4c542] mb-5">
              Energía para avanzar
            </p>

            <h1 className="text-[60px] leading-[66px] font-semibold tracking-tight mb-6">
              {slides[current].title}
            </h1>

            <p className="text-[21px] leading-[34px] text-white/90 mb-10">
              {slides[current].text}
            </p>

            <div className="flex gap-4">

              <button className="bg-[#f4c542] hover:bg-[#e6b632] text-[#0a2a66] px-8 py-4 rounded-full font-semibold transition duration-300">
                {slides[current].button}
              </button>

              <button className="border border-white/80 hover:bg-white hover:text-[#0a2a66] text-white px-8 py-4 rounded-full font-semibold transition duration-300">
                Más información
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* FLECHA IZQUIERDA */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white text-2xl transition z-20"
      >
        ←
      </button>

      {/* FLECHA DERECHA */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white text-2xl transition z-20"
      >
        →
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-10 h-3 bg-[#f4c542]"
                : "w-3 h-3 bg-white/60 hover:bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  );
}