// src/pages/Accessories.jsx
import AccesoriosList from "../components/AccesoriosList.jsx"; // importamos el listado completo
import "../styles/layout.css";

export default function Accessories() {
  return (
    <div className="p-4">
      {/* Título de la página */}
      <h1 className="text-2xl font-bold text-center my-6">Accesorios</h1>
      
      {/* Aquí insertamos tu listado con buscador y grid */}
      <AccesoriosList />
    </div>
  );
}
