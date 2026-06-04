"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import GasMenu from "./GasMenu";
import TiendaMenu from "./TiendaMenu";
import VantiListoMenu from "./VantiListoMenu";
import VantiMaxMenu from "./VantiMaxMenu";
import TramitesMenu from "./TramitesMenu";

export default function HogaresSubMenu() {

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (

    <div className="relative z-[50] border-b border-[#eceff5] bg-white">

      {/* BARRA */}
      <div className="max-w-[1460px] mx-auto h-[70px] px-24 flex items-center">

        <div className="flex items-center gap-8 text-[#173A6A]">

          {/* SERVICIOS GAS */}
          <button
            onClick={() => toggleMenu("gas")}
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/gas.PNG"
              alt="Servicios gas"
              className="w-[24px] object-contain"
            />

            <span className="text-[15px] font-medium">
              Servicios gas
            </span>

            <ChevronDown
              size={16}
              strokeWidth={1.8}
              className={`
                transition-transform duration-200
                ${activeMenu === "gas" ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* TIENDA */}
          <button
            onClick={() => toggleMenu("tienda")}
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/tienda-virtual.PNG"
              alt="Tienda Virtual"
              className="w-[24px] object-contain"
            />

            <span className="text-[15px] font-normal">
              Tienda Virtual
            </span>

            <ChevronDown
              size={15}
              strokeWidth={1.8}
              className={`
                transition-transform duration-200
                ${activeMenu === "tienda" ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* VANTI LISTO */}
          <button
            onClick={() => toggleMenu("listo")}
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/vanti-listo.PNG"
              alt="Vanti Listo"
              className="w-[24px] object-contain"
            />

            <span className="text-[14px] font-normal">
              Vanti Listo
            </span>

            <ChevronDown
              size={15}
              strokeWidth={1.8}
              className={`
                transition-transform duration-200
                ${activeMenu === "listo" ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* VANTI MAX */}
          <button
            onClick={() => toggleMenu("max")}
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/vanti-max.PNG"
              alt="Vanti Max"
              className="w-[24px] object-contain"
            />

            <span className="text-[15px] font-normal">
              Vanti Max
            </span>

            <ChevronDown
              size={16}
              strokeWidth={1.8}
              className={`
                transition-transform duration-200
                ${activeMenu === "max" ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* TRÁMITES */}
          <button
            onClick={() => toggleMenu("tramites")}
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/tramites-ayuda.PNG"
              alt="Trámites y ayuda"
              className="w-[23px] object-contain"
            />

            <span className="text-[15px] font-normal">
              Trámites y ayuda
            </span>

            <ChevronDown
              size={16}
              strokeWidth={1.8}
              className={`
                transition-transform duration-200
                ${activeMenu === "tramites" ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* SEGUIMIENTO */}
          <button
            className="flex items-center gap-2 cursor-pointer transition hover:opacity-80"
          >

            <img
              src="/seguimiento-orden.PNG"
              alt="Seguimiento"
              className="w-[26px] object-contain"
            />

            <span className="text-[15px] font-normal whitespace-nowrap">
              Seguimiento de mi orden
            </span>

          </button>

        </div>

      </div>

      {/* DROPDOWNS */}

      {activeMenu === "gas" && <GasMenu />}

      {activeMenu === "tienda" && <TiendaMenu />}

      {activeMenu === "listo" && <VantiListoMenu />}

      {activeMenu === "max" && <VantiMaxMenu />}

      {activeMenu === "tramites" && <TramitesMenu />}

    </div>
  );
}