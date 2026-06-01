// =========================
// DROPDOWN TIENDA
// =========================

export default function TiendaMenu() {
  return (
    <div className="absolute left-0 top-full z-[999] w-full border-t border-[#edf1f7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="max-w-[1460px] mx-auto px-[72px] py-[52px] flex items-stretch">

        {/* IZQUIERDA */}
        <div className="flex shrink-0">

          {/* COLUMNA 1 */}
          <div className="w-[165px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Gasodomésticos
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Inicio Tienda Virtual
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Todo
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Calentadores
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Campanas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Estufas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Hornos
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Mesones
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Calefacción
              </span>

            </div>

          </div>

          {/* COLUMNA 2 */}
          <div className="w-[165px] ml-[28px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Electrodomésticos
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Todo
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Televisores
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Celulares
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Lavadoras
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Neveras
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Baterías de ollas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Planchas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Aires acondicionados
              </span>

            </div>

          </div>

          {/* COLUMNA 3 */}
          <div className="w-[165px] ml-[28px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Comercios
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Todo
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Plantas Eléctricas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Cocción Comercio
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Calentadores Comercio
              </span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
         <div className="w-px self-stretch bg-[#d7deea] ml-[18px] mr-[22px] shrink-0" />

        {/* DERECHA */}
        <div className="flex-1 pl-[6px] pr-[42px] flex items-start gap-[16px]">

          {/* CARD 1 */}
          <div className="w-[185px] bg-white rounded-[10px] overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.03)] border border-[#f1f4f8]">

            <img
              src="/tienda1.jpg"
              alt="Tienda Virtual"
              className="w-full h-[142px] object-cover"
            />

            <div className="px-[16px] pt-[10px] pb-[14px] flex flex-col items-center">

              <h4 className="text-[14px] leading-[22px] font-medium text-[#173A6A] text-center">
                Tienda Virtual
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[34px]
                  px-[18px]
                  border
                  border-[#173A6A]
                  rounded-full
                  text-[14px]
                  text-[#173A6A]
                  hover:bg-[#173A6A]
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                Conocer más
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="w-[185px] bg-white rounded-[10px] overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.03)] border border-[#f1f4f8]">

            <img
              src="/tienda2.jpg"
              alt="Gasodomésticos"
              className="w-full h-[142px] object-cover object-left"
            />

            <div className="px-[16px] pt-[10px] pb-[14px] flex flex-col items-center">

              <h4 className="text-[14px] leading-[22px] font-medium text-[#173A6A] text-center">
                Gasodomésticos
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[34px]
                  px-[18px]
                  border
                  border-[#173A6A]
                  rounded-full
                  text-[14px]
                  text-[#173A6A]
                  hover:bg-[#173A6A]
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                Conocer más
              </button>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="w-[185px] bg-white rounded-[10px] overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.03)] border border-[#f1f4f8]">

            {/* IMAGE */}
            <div className="bg-[#43b6e8] h-[142px] flex items-center justify-center overflow-hidden">

              <img
                src="/tienda3.jpg"
                alt="Electrodomésticos"
                className="w-[182px] h-[172px] object-cover rounded-[10px]"
              />

            </div>

            {/* CONTENT */}
            <div className="px-[16px] pt-[12px] pb-[14px] flex flex-col items-center">

              <h4 className="text-[14px] leading-[20px] font-medium text-[#173A6A] text-center">
                Electrodomésticos
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[34px]
                  px-[18px]
                  border
                  border-[#173A6A]
                  rounded-full
                  text-[14px]
                  text-[#173A6A]
                  hover:bg-[#173A6A]
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                Conocer más
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}