import { useEffect, useState } from "react";
import { getAccessories } from "../services/accessoriesApi";
import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Accessories() {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccessories()
      .then(setAccessories)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Cargando accesorios...</h2>;

  return (
    <div>
      <h1>Accesorios</h1>

      <div className="grid">
        {accessories.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <Link to={`/accesorio/${item.id}`}>
              <button className="btn-detail">
                Ver detalle
              </button>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
