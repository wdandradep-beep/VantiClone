export default function TopBar() {
  return (
    <div className="relative w-full bg-[rgb(21,45,82)] text-white z-[999] overflow-visible">

      <div className="flex w-full overflow-visible">

        {/* CONTENIDO */}
        <div className="flex-1 flex justify-center overflow-visible">

          <div className="w-full max-w-[1440px] h-[40px] flex items-center px-13 overflow-visible">

            {/* IZQUIERDA */}
            <div className="flex items-center gap-7 text-[17px] font-medium tracking-[0.1px] overflow-visible">

              {/* HOGARES */}
              <span className="text-[#FFD54A] border-b border-[#FFD54A] pb-[8px] leading-none">
                Hogares
              </span>

              {/* EMPRESAS */}
              <div className="relative group h-[40px] flex items-center">

                {/* BOTÓN */}
                <div className="flex items-center gap-[3px] hover:text-[#FFD54A] cursor-pointer leading-none transition">

                  <span>
                    Empresas
                  </span>

                  {/* FLECHA */}
                  <div className="relative w-[12px] h-[12px] flex items-center justify-center">

                    {/* ABAJO */}
                    <svg
                      className="
                        absolute
                        w-[20px]
                        h-[15px]
                        group-hover:opacity-0
                        transition-opacity
                        duration-150
                      "
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 7l5 5 5-5" />
                    </svg>

                    {/* ARRIBA */}
                    <svg
                      className="
                        absolute
                        w-[20px]
                        h-[15px]
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-150
                      "
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l5-5 5 5" />
                    </svg>

                  </div>

                </div>

                {/* MEGA MENU */}
                <div
                  className="
                    absolute
                    left-[-149px]
                    top-full
                    w-screen
                    opacity-0
                    invisible
                    pointer-events-none
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:pointer-events-auto
                    transition-all
                    duration-200
                    z-[9999]
                  "
                >

                  <div className="bg-[linear-gradient(180deg,#98A0D6_0%,#8E96CC_100%)] w-screen rounded-b-[10px] px-[48px] py-10 shadow-xl">

                    <div className="flex gap-24 text-white">

                      {/* COLUMNA 1 */}
                      <div className="max-w-[210px] group/item cursor-pointer">

                        <div className="flex items-center gap-3 mb-8">

                          <h3 className="text-[16px] font-normal text-[#1D376A]">
                            Comercio
                          </h3>

                                                      <span
                                    className="
                                      text-[21px]
                                      text-[#1D376A]
                                      leading-none
                                      transition-transform
                                      duration-200
                                      group-hover/item:translate-x-[4px]
                                    "
                                  >
                                    ›
                                  </span>

                        </div>

                        <p className="text-[15px] leading-[22px] font-normal">
                          Restaurantes, Bares,
                          Establecimientos comerciales,
                          pymes
                        </p>

                      </div>

                      {/* COLUMNA 2 */}
                      <div className="max-w-[210px] group/item cursor-pointer">

                        <div className="flex items-center gap-3 mb-8">

                         <h3 className="text-[16px] font-normal text-[#1D376A]">
                            Instituciones
                          </h3>

                          <span
                        className="
                          text-[21px]
                          text-[#1D376A]
                          leading-none
                          transition-transform
                          duration-200
                          group-hover/item:translate-x-[4px]
                        "
                          >
                            ›
                          </span>

                        </div>

                        <p className="text-[15px] leading-[22px] font-normal">
                          Instituciones públicas o
                          privadas.
                        </p>

                      </div>

                      {/* COLUMNA 3 */}
                      <div className="max-w-[260px] group/item cursor-pointer">

                        <div className="flex items-center gap-3 mb-8">

                          <h3 className="text-[16px] font-normal text-[#1D376A]">
                            Grandes Clientes
                          </h3>

                          <span
                            className="
                              text-[21px]
                              text-[#1D376A]
                              leading-none
                              transition-transform
                              duration-200
                              group-hover/item:translate-x-[4px]
                            "
>
                            ›
                          </span>

                        </div>

                        <p className="text-[15px] leading-[22px] font-normal">
                          Industria Regulada, Industria No
                          Regulada y servicios de altos
                          consumos.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* CONSTRUCTORES */}
              <span className="hover:text-[#FFD54A] cursor-pointer leading-none transition">
                Constructores
              </span>

              {/* GAS */}
              <span className="hover:text-[#FFD54A] cursor-pointer leading-none transition">
                Gas Natural Vehicular
              </span>

            </div>

            {/* DERECHA */}
            <div className="ml-auto flex items-center gap-6 text-[17px] font-medium tracking-[0.1px]">

              <span className="hover:text-[#FFD54A] cursor-pointer leading-none transition">
                Conócenos
              </span>

              <span className="hover:text-[#FFD54A] cursor-pointer leading-none transition">
                Contáctanos
              </span>

            </div>

          </div>

        </div>

        {/* EMERGENCIAS */}
        <div className="bg-[#eb8d6e] h-[40px] px-10 flex items-center text-[#173A6A] text-[14px] font-normal">

          <img
            src="/advertencia.png"
            alt="Emergencias"
            className="w-[24px] h-[24px] object-contain mr-2"
          />

          Emergencias: Llamar al 164

        </div>

      </div>

    </div>
  );
}