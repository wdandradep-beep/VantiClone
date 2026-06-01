import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1d2a7a] to-[#0a2a66] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">

        {/* BLOQUE IZQUIERDA */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold leading-snug">
            Somos Vanti,<br />
            más formas de<br />
            avanzar
          </h2>
        </div>

        {/* ACERCA DE */}
        <div>
          <h3 className="font-semibold mb-4">Acerca de</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Quiénes somos</li>
            <li>Conócenos</li>
            <li>Trabaja con Vanti</li>
            <li>Inversionistas</li>
            <li>Comunicados de prensa y noticias</li>
            <li>Sostenibilidad</li>
            <li>Proveedores</li>
            <li>Enlaces de interés</li>
          </ul>
        </div>

        {/* SERVICIO AL CLIENTE */}
        <div>
          <h3 className="font-semibold mb-4">Servicio al cliente</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Centro de ayuda</li>
            <li>Conoce las Reglas Generales</li>
            <li>Comportamiento de Vanti</li>
            <li>Notificaciones de servicio</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>

        {/* SOCIEDADES */}
        <div>
          <h3 className="font-semibold mb-4">Sociedades</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Vanti S.A. ESP</li>
            <li>Gas Natural Cundiboyacense S.A.</li>
            <li>Gasoriente S.A. ESP</li>
            <li>GasNacer S.A. ESP</li>
            <li>Inversionistas</li>
            <li>VantiSoluciones</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Régimen Jurídico</li>
            <li>Transparencia</li>
            <li>Resolución CREG 080</li>
            <li>Notificaciones judiciales</li>
            <li>Contacto</li>
            <li>Términos y condiciones</li>
          </ul>
        </div>

      </div>

      {/* ICONOS */}
      <div className="flex justify-center items-center gap-10 mt-12 text-white">

  {/* FACEBOOK */}
  <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.4V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.6l-.42 2.9h-2.18V22c4.78-.81 8.44-4.94 8.44-9.93z"/>
  </svg>

  {/* INSTAGRAM */}
  <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5c2.07 0 3.75 1.68 3.75 3.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>

  {/* LINKEDIN */}
  <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v14H0V8zm7.5 0h4.7v1.92h.07c.65-1.23 2.23-2.53 4.6-2.53 4.92 0 5.83 3.24 5.83 7.45V22h-5v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V22h-5V8z"/>
  </svg>

  {/* YOUTUBE */}
  <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.5.7a2.9 2.9 0 00-2 2C0 8 0 12 0 12s0 4 .5 5.8a2.9 2.9 0 002 2c1.7.7 9.5.7 9.5.7s7.8 0 9.5-.7a2.9 2.9 0 002-2C24 16 24 12 24 12s0-4-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"/>
  </svg>

  {/* X (TWITTER) */}
  <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.6L4.8 22H2l8.1-9.3L1 2h6.9l4.8 6L18.9 2z"/>
  </svg>

</div>

{/* LINEA FINAL */}
<div className="max-w-7xl mx-auto px-6 mt-10">
  
</div>
<div className="border-t border-white/30 mt-10 w-full"></div>

{/* TEXTO LEGAL */}
<div className="max-w-7xl mx-auto px-6 mt-6 text-xs text-gray-300 leading-relaxed">
  <p>
    Todos los derechos reservados Vanti S.A. ESP. – Calle 71A No. 5-38 Bogotá
  </p>

  <p className="mt-1">
    Emergencias: 164 - Líneas de Atención al Cliente Hogar - Comercial 601 – 3078121,
    Institucionales, Industria y GNV: 601 - 7053256
  </p>

  <p className="mt-1">
    NIT: 800.007.813-5
  </p>
</div>
    </footer>
  );
}