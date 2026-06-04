import { Search } from "lucide-react";

export default function MainHeader() {
  return (
    <div className="relative bg-white z-0">

      <div className="max-w-[1440px] mx-auto h-[90px] px-10 flex items-center justify-between">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-5 pt-[10px]">

          {/* LOGO */}
          <div className="cursor-pointer flex items-center mt-[-2px]">

            <img
              src="/logo-vanti.png"
              alt="Vanti"
              className="w-[185px] min-w-[185px] object-contain"
            />

          </div>

          {/* BUSCADOR */}
          <div className="relative mt-[10px]">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d879c]"
              size={22}
            />

            <input
              type="text"
              placeholder="Buscar"
              className="
                w-[330px]
                min-w-[330px]
                h-[54px]
                bg-[#f3f3fb]
                rounded-[10px]
                pl-12
                pr-4
                text-[16px]
                border border-transparent
                outline-none
                transition
                hover:border-[#173d7a]
                focus:border-[#173d7a]
              "
            />

          </div>

        </div>

        {/* SEPARADOR IZQUIERDO */}
        <div className="h-[58px] min-w-px bg-[#d7dceb] mx-6 mt-[8px]"></div>

        {/* DERECHA */}
        <div className="flex items-center pt-[4px]">

          {/* ICONOS */}
          <div className="flex items-center gap-4 pr-8 pt-[10px]">

            {/* PAGA ACÁ */}
            <div className="flex flex-col items-center justify-center leading-none text-[#0a2a66] cursor-pointer hover:opacity-80 transition">

              <img
                src="/paga-aca.JPG"
                alt="Paga acá"
                className="w-[27px] object-contain"
              />

              <span className="text-[11px] leading-[11px] mt-[4px] text-center font-normal">
                Paga acá
              </span>

            </div>

            {/* PSE */}
            <div className="flex flex-col items-center justify-center leading-none text-[#0a2a66] cursor-pointer hover:opacity-80 transition">

              <img
                src="/pse.JPG"
                alt="PSE"
                className="w-[24px] object-contain"
              />

              <span className="text-[11px] leading-[11px] mt-[4px] text-center font-normal max-w-[60px]">
                Paga por PSE
              </span>

            </div>

            {/* BANCOLOMBIA */}
            <div className="flex flex-col items-center justify-center leading-none text-[#0a2a66] cursor-pointer hover:opacity-80 transition">

              <img
                src="/bancolombia.JPG"
                alt="Bancolombia"
                className="w-[28px] object-contain"
              />

              <span className="text-[11px] leading-[11px] mt-[4px] text-center font-normal max-w-[88px]">
                Pagos Botón Bancolombia
              </span>

            </div>

            {/* CARRITO */}
            <div className="relative flex flex-col items-center justify-center leading-none text-[#0a2a66] cursor-pointer hover:opacity-80 transition">

              <img
                src="/carrito.JPG"
                alt="Carrito"
                className="w-[34px] object-contain"
              />

              <span className="text-[11px] leading-[11px] mt-[4px] text-center font-normal">
                Carrito
              </span>

            </div>

          </div>

          {/* SEPARADOR DERECHO */}
          <div className="h-[58px] w-px bg-[#d7dceb] mx-4 mt-[8px]"></div>

          {/* BOTONES */}
          <div className="flex items-center gap-4 pt-[8px]">

            {/* REGÍSTRATE */}
            <button
              className="
                h-[40px]
                px-8
                bg-[#f4c542]
                hover:bg-[#e4b62f]
                rounded-full
                text-[#0a2a66]
                text-[15px]
                font-medium
                whitespace-nowrap
                transition
              "
            >
              Regístrate
            </button>

            {/* INICIA SESIÓN */}
            <button
              className="
                h-[44px]
                px-8
                border
                border-[#0a2a66]
                rounded-full
                text-[#0a2a66]
                text-[15px]
                font-medium
                whitespace-nowrap
                hover:bg-[#0a2a66]
                hover:text-white
                transition
              "
            >
              Inicia sesión
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}