import { useEffect, useState } from "react";
import { getAccessories } from "../services/accessoriesApi";
import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function AccesoriosList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAccessories();
        setItems(data);
      } catch (err) {
        setError("No se pudieron cargar los accesorios");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filtered = items.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      a.marca?.toLowerCase().includes(search.toLowerCase()) ||
      a.categoria?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center py-8">Cargando accesorios...</p>;
  if (error) return <p className="text-center text-red-600 py-8">{error}</p>;

  return (
    <div>
      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar por nombre, marca o categoría"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-buscar"
      />



    {/* GRID */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No se encontraron accesorios.</p>
      ) : (
        <div className="grid">
          {filtered.map((acc) => (
            <div key={acc.id} className="card">
              <img
                src={acc.imagen || acc.image}
                alt={acc.nombre || "Accesorio"}
                onError={(e) => { e.target.src = "/assets/imagen-default.jpg"; }}
              />

             <h3>{acc.nombre || acc.name || "Sin nombre"}</h3>

              <p className="carrito-precio">
              ${Number(acc.precio ?? acc.price ?? 0).toLocaleString("es-CO")}
              </p>


              <Link to={`/accesorio/${acc.id}`}>
                <button className="btn-detail">Ver detalle</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}