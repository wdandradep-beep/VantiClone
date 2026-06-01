export default function Info() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0a2a66] leading-tight">
            ¿Eres el dueño de tu vivienda, pero la factura no llega a tu nombre?
          </h2>

          <p className="mt-4 text-gray-600">
            Es momento de actualizar tus datos y mantener el control de tu servicio.
          </p>

          <button className="mt-6 bg-yellow-400 px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-500 transition">
            Mi Vanti en Línea
          </button>
        </div>

        {/* IMAGEN */}
        <div>
          <img
            src="https://images.ctfassets.net/3brzg7q3bvg1/5C7zEdz6Hh2YcB9V8k2z0p/2c3d0f6a0b47d2b0d5e4e7c9f3f5b9b2/CAMBIO_TITULARIDAD.png"
            alt="info"
            className="w-full rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}