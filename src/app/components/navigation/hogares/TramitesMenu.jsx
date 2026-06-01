export default function TramitesMenu() {
  return (

    <div className="absolute left-0 top-full z-[999] w-full border-t border-[#edf1f7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="max-w-[1460px] mx-auto px-[72px] py-[75px] flex items-stretch">

        {/* IZQUIERDA */}
        <div className="flex gap-[38px] pr-[14px]">

          {/* COLUMNA 1 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Trámites en línea
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Ver centro de ayuda
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Paga tu factura en línea
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Solicita factura en línea
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Mi Vanti en Línea
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Agenda tu turno en centros de atención
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Programar RPO
              </span>

            </div>

          </div>

          {/* COLUMNA 2 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Consulta y paga tu factura
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                ¿Dónde pagar?
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Conoce tu factura
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Actualizar datos
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Reconexión o Cancelación
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Financia tu factura
              </span>

            </div>

          </div>

          {/* COLUMNA 3 */}
          <div className="w-[175px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Preguntas Frecuentes Vanti
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Servicios gas
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Revisión Periódica Obligatoria
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Suspensión y reconexión del servicio
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Facturación
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Vanti Listo
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Prevención Daños
              </span>

            </div>

          </div>

          {/* COLUMNA 4 */}
          <div className="w-[178px]">

            <h3 className="text-[17px] leading-[24px] text-[#173A6A] font-semibold tracking-[-0.2px] border-b border-[#ccd5e5] pb-[14px] mb-[18px]">
              Peticiones, quejas y recursos
            </h3>

            <div className="flex flex-col gap-[10px] text-[#173A6A] text-[15px] leading-[24px]">

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Información sobre PQRs
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Radica una PQR
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Formatos para radicar solicitudes
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Actualiza tus datos
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Otras solicitudes
              </span>

              <span className="cursor-pointer hover:text-[#c9b12d] transition-colors">
                Consultar estado de PQRs
              </span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-px bg-[#c8d2e3] self-stretch ml-[10px] mr-[14px]" />

        {/* DERECHA */}
        <div className="flex flex-col gap-[18px] pt-[2px]">

          <img
            src="/atencion1.png"
            alt="Whatsapp"
            className="w-[430px] object-contain"
          />

        </div>

      </div>

    </div>

  );
}