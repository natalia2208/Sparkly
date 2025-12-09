import { useEffect, useState } from "react";
import AccesoriosList from "../components/AccesoriosList.jsx";
import { getAccessories } from "../services/accessoriesService.js";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAccessories()
      .then((data) => setItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sobre Nosotros</h1>

      <AccesoriosList items={items} loading={loading} error={error} />
    </div>
  );
}
