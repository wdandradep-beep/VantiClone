import { MessageCircle, Smartphone, HelpCircle, MapPin } from "lucide-react";

export default function Services() {

  const services = [
    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/3KihnT8t/factura_express.webp?fm=webp&q=75&w=600",
      title: "Solicita tu nuevo servicio de Gas Natural",
    },
    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/2vrYweaKthR7QQ9e18m4ex/d2690556d31909e8f0bbcd078e68412b/BANNER_AUTOGESTION.png",
      title: "Programa tu Revisión Periódica Obligatoria",
    },
    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/2X2ZgTP99URf9CthDB4nLd/cedfc894aa89c03b91986d2bb382ace4/BANNER_1920x600.png",
      title: "Solicita reparación o mantenimiento de tu gasodoméstico",
    },
    {
      img: "https://images.ctfassets.net/3brzg7q3bvg1/3KihnT8t/factura_express.webp?fm=webp&q=75&w=600",
      title: "Solicita y agenda instalación de tus gasodomésticos",
    },
  ];

  return (
    <section className="bg-[#f5f7fa] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TITULO ===== */}
        <h2 className="text-center text-2xl font-semibold text-[#0a2a66]">
          Descubre servicios de gas para tu hogar
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Estos son nuestros servicios principales
        </p>

        <div className="w-20 h-[2px] bg-yellow-500 mx-auto my-6"></div>


        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt="servicio"
                className="w-full h-40 object-cover"
              />

              <div className="p-5 text-left">
                <h3 className="text-sm text-[#0a2a66] font-medium leading-snug">
                  {item.title}
                </h3>

                <button className="mt-4 border border-[#0a2a66] text-[#0a2a66] px-4 py-1.5 rounded-full text-xs hover:bg-[#0a2a66] hover:text-white transition">
                  Conoce más
                </button>
              </div>
            </div>
          ))}

        </div>


        {/* ===== AYUDA ===== */}
        <div className="mt-20 text-center">

          <h3 className="text-xl font-semibold text-[#0a2a66]">
            ¿Necesitas ayuda?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-10">

            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <MessageCircle className="w-8 h-8 text-[#0a2a66] mb-3" />
              <p className="font-medium text-[#0a2a66]">WhatsApp</p>
              <span className="text-gray-500 text-xs mt-1">Consultar</span>
            </div>

            {/* Líneas */}
            <div className="flex flex-col items-center">
              <Smartphone className="w-8 h-8 text-[#0a2a66] mb-3" />
              <p className="font-medium text-[#0a2a66]">Líneas de atención</p>
              <span className="text-gray-500 text-xs mt-1">Ver más</span>
            </div>

            {/* FAQ */}
            <div className="flex flex-col items-center">
              <HelpCircle className="w-8 h-8 text-[#0a2a66] mb-3" />
              <p className="font-medium text-[#0a2a66]">Preguntas frecuentes</p>
              <span className="text-gray-500 text-xs mt-1">Ver más</span>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#0a2a66] mb-3" />
              <p className="font-medium text-[#0a2a66]">Puntos de atención</p>
              <span className="text-gray-500 text-xs mt-1">Consultar</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}