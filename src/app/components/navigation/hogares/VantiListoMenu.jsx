// =========================
// DROPDOWN VANTI LISTO
// =========================

export default function VantiListoMenu() {
  return (
    <div className="absolute left-0 top-full z-[999] w-full border-t border-[#edf1f7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="max-w-[1460px] mx-auto px-[72px] py-[75px] flex items-stretch">

        {/* IZQUIERDA */}
        <div className="flex gap-[38px] pr-[22px]">

          {/* COLUMNA 1 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Vanti Listo
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Inicio
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Conócenos
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Consulta tu cupo
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Tiendas Aliadas
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Motos
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Celebraciones y promociones
              </span>

            </div>

          </div>

          {/* COLUMNA 2 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Seguros
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Rueda Seguro
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Cuota Protegida
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Plan Combo Vida
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Plan Vida + Renta Diaria
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Vida deudor
              </span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="flex items-stretch ml-[26px] mr-[34px] shrink-0">
          <div className="w-px bg-[#c8d2e3]" />
        </div>

        {/* DERECHA */}
        <div className="flex-1 pl-[24px] flex items-start gap-[18px]">

          {/* CARD 1 */}
          <div className="w-[205px] overflow-hidden rounded-[10px] border border-[#f1f4f8] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            {/* IMAGE */}
            <div className="h-[180px] overflow-hidden">

              <img
                src="/listo1.jpg"
                alt="Conoce Vanti Listo"
                className="h-full w-full object-cover"
              />

            </div>

            {/* LINE */}
            <div className="h-[3px] bg-[#1f1f1f]" />

            {/* CONTENT */}
            <div className="flex flex-col items-center px-[16px] pt-[12px] pb-[16px]">

              <h4 className="min-h-[42px] text-center text-[14px] font-semibold leading-[20px] tracking-[-0.2px] text-[#173A6A]">
                Conoce Vanti Listo
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[36px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[18px]
                  text-[14px]
                  text-[#173A6A]
                  transition-all
                  duration-200
                  hover:bg-[#173A6A]
                  hover:text-white
                "
              >
                Conocer más
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="w-[205px] overflow-hidden rounded-[10px] border border-[#f1f4f8] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            {/* IMAGE */}
            <div className="h-[170px] overflow-hidden">

              <img
                src="/listo2.jpg"
                alt="Consulta tu cupo"
                className="h-full w-full object-cover"
              />

            </div>

            {/* LINE */}
            <div className="h-[3px] bg-[#1f1f1f]" />

            {/* CONTENT */}
            <div className="flex flex-col items-center px-[16px] pt-[12px] pb-[16px]">

              <h4 className="min-h-[42px] text-center text-[14px] font-semibold leading-[20px] tracking-[-0.2px] text-[#173A6A]">
                Consulta tu cupo
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[36px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[18px]
                  text-[14px]
                  text-[#173A6A]
                  transition-all
                  duration-200
                  hover:bg-[#173A6A]
                  hover:text-white
                "
              >
                Activa tu cupo
              </button>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="w-[205px] overflow-hidden rounded-[10px] border border-[#f1f4f8] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            {/* IMAGE */}
            <div className="h-[170px] overflow-hidden">

              <img
                src="/listo3.jpg"
                alt="Tiendas Aliadas"
                className="h-full w-full object-cover"
              />

            </div>

            {/* LINE */}
            <div className="h-[3px] bg-[#1f1f1f]" />

            {/* CONTENT */}
            <div className="flex flex-col items-center px-[16px] pt-[12px] pb-[16px]">

              <h4 className="min-h-[42px] text-center text-[14px] font-semibold leading-[20px] tracking-[-0.2px] text-[#173A6A]">
                Tiendas Aliadas
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[36px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[18px]
                  text-[14px]
                  text-[#173A6A]
                  transition-all
                  duration-200
                  hover:bg-[#173A6A]
                  hover:text-white
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