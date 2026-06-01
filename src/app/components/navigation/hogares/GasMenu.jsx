// =========================
// DROPDOWN SERVICIOS GAS
// =========================

export default function GasMenu() {
  return (
    <div className="absolute left-0 top-full z-[999] w-full border-t border-[#edf1f7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="max-w-[1460px] mx-auto px-[72px] py-[54px] flex items-start">

        {/* IZQUIERDA */}
        <div className="flex shrink-0 gap-[24px]">

          {/* COLUMNA 1 */}
          <div className="w-[182px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Solicitar Servicio de gas
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Solicitar Servicio de gas
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Disponibilidad y Captación del Servicio
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Proceso de conexión al gas natural
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Contrato de condiciones uniforme
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Tarifas cargo de conexión
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                ¿Con quien solicitar tu servicio?
              </span>

            </div>

          </div>

          {/* COLUMNA 2 */}
          <div className="w-[184px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Revisión Periódica Obligatoria (RPO)
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Qué es
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Programa tu revisión
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Proceso de la Revisión Periódica Obligatoria - RPO
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Organismos de inspección acreditados
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Normativa
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                ABC de RPO
              </span>

            </div>

          </div>

          {/* COLUMNA 3 */}
          <div className="w-[162px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Otros servicios gasodomésticos
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Agenda Mantenimiento
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Agenda Reparación
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Agenda Instalación
              </span>

            </div>

          </div>

          {/* COLUMNA 4 */}
          <div className="w-[176px]">

            <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.2px] text-[#173A6A] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Distribución de Gas Natural con Vanti
            </h3>

            <div className="flex flex-col gap-[10px] text-[15px] leading-[24px] text-[#173A6A]">

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Información general
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Mantenimiento de la red de distribución de gas natural.
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Zonas de distribución
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Tarifas de gas
              </span>

              <span className="cursor-pointer transition-colors hover:text-[#c9b12d]">
                Tarifas Complementarias de Distribución de Gas
              </span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-px self-stretch bg-[#d7deea] ml-[18px] mr-[22px] shrink-0" />

        {/* DERECHA */}
        <div className="flex gap-[18px] pt-[4px]">

          {/* CARD 1 */}
          <div className="w-[205px] overflow-hidden rounded-[12px] border border-[#edf1f7] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            <div className="h-[172px] overflow-hidden">

              <img
                src="/hogars1.jpg"
                alt="Solicitar Servicio de gas"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="flex flex-col items-center px-[18px] pt-[14px] pb-[18px]">

              <h4 className="min-h-[52px] text-center text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#173A6A]">
                Solicitar Servicio de gas
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[42px]
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
          <div className="w-[205px] overflow-hidden rounded-[12px] border border-[#edf1f7] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]">

            <div className="h-[172px] overflow-hidden">

              <img
                src="/hogars2.jpg"
                alt="RPO"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="flex flex-col items-center px-[18px] pt-[14px] pb-[18px]">

              <h4 className="min-h-[52px] text-center text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#173A6A]">
                RPO
              </h4>

              <button
                className="
                  mt-[14px]
                  h-[42px]
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