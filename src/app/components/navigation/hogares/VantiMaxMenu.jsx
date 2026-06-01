// =========================
// DROPDOWN VANTI MAX
// =========================

export default function VantiMaxMenu() {
  return (
    <div className="absolute left-0 top-full z-[999] w-full border-t border-[#edf1f7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="max-w-[1460px] mx-auto px-[72px] py-[75px] flex items-stretch">

        {/* IZQUIERDA */}
        <div className="flex gap-[42px] pr-[28px]">

          {/* COLUMNA 1 */}
          <div className="w-[172px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Planes de pago mensual
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Inicio
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Plan mensual Vanti Max
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Plan Nuevo Hogar
              </span>

            </div>

          </div>

          {/* COLUMNA 2 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Pago por servicio
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Mantenimiento preventivo anual
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Reparación de gasodomésticos
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Revisión Periódica Obligatoria (RPO)
              </span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-px self-stretch bg-[#d7deea] ml-[18px] mr-[22px] shrink-0" />

        {/* DERECHA */}
        <div className="flex items-start gap-[18px] pl-[6px]">

          {/* CARD 1 */}
          <div className="w-[188px] overflow-hidden rounded-[10px] border border-[#edf1f7] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            <img
              src="/max1.jpg"
              alt="Plan mensual Vanti Max"
              className="w-full h-[172px] object-cover"
            />

            <div className="flex flex-col items-center px-[18px] pt-[16px] pb-[20px]">

              <h4 className="text-center text-[16px] font-semibold leading-[28px] tracking-[-0.2px] text-[#173A6A]">
                Plan mensual Vanti Max
              </h4>

              <button
                className="
                  mt-[16px]
                  h-[46px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[24px]
                  text-[15px]
                  text-[#173A6A]
                  transition-all
                  hover:bg-[#173A6A]
                  hover:text-white
                "
              >
                Conoce más
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="w-[188px] overflow-hidden rounded-[10px] border border-[#edf1f7] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            <img
              src="/max2.jpg"
              alt="Reparación de gasodomésticos"
              className="w-full h-[172px] object-cover"
            />

            <div className="flex flex-col items-center px-[18px] pt-[16px] pb-[20px]">

              <h4 className="text-center text-[16px] font-semibold leading-[28px] tracking-[-0.2px] text-[#173A6A]">
                Reparación de gasodomésticos
              </h4>

              <button
                className="
                  mt-[16px]
                  h-[46px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[24px]
                  text-[15px]
                  text-[#173A6A]
                  transition-all
                  hover:bg-[#173A6A]
                  hover:text-white
                "
              >
                Conocer más
              </button>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="w-[188px] overflow-hidden rounded-[10px] border border-[#edf1f7] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            <img
              src="/max3.jpg"
              alt="Mantenimiento preventivo"
              className="w-full h-[172px] object-cover"
            />

            <div className="flex flex-col items-center px-[18px] pt-[16px] pb-[20px]">

              <h4 className="text-center text-[16px] font-semibold leading-[28px] tracking-[-0.2px] text-[#173A6A]">
                Mantenimiento preventivo
              </h4>

              <button
                className="
                  mt-[16px]
                  h-[46px]
                  rounded-full
                  border
                  border-[#173A6A]
                  px-[24px]
                  text-[15px]
                  text-[#173A6A]
                  transition-all
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