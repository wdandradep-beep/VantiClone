export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="text-blue-900 font-bold text-xl">
          VANTI
        </h1>

        {/* BUSCADOR */}
        <input
          type="text"
          placeholder="Buscar"
          className="border rounded-lg px-4 py-2 w-64"
        />

        {/* BOTÓN */}
        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-semibold">
          💳 Paga tu factura
        </button>

      </div>
    </header>
  );
}