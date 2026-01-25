// pagina not found
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white p-6"> 
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <a href="/" className="text-amber-500 font-medium hover:underline">Volver al inicio</a>
    </div>
  );
}