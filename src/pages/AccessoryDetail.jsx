import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessoryById } from "../services/accessoriesApi";

const AccessoryDetail = () => {
  const { id } = useParams();

  const [accessory, setAccessory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAccessoryById(id);
        setAccessory(data);
      } catch (err) {
        setError("No se pudo cargar el accesorio");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;
  if (!accessory) return <p>No existe ese accesorio</p>;

  const img = accessory.imagen || accessory.image || "";
  const name = accessory.nombre || accessory.name || "Sin nombre";
  const brand = accessory.marca || accessory.brand || "-";
  const category = accessory.categoria || accessory.category || "-";
  const price = accessory.precio ?? accessory.price ?? "-";
  const description = accessory.descripcion || accessory.description || "";

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = {
      id: accessory.id,
      name,
      price,
      image: img
    };

    // evitar duplicados
    if (cart.some(item => item.id === product.id)) {
      alert("Este producto ya está en el carrito 🛒");
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // notificar al menu
    window.dispatchEvent(new Event("cartUpdated"));

    alert("✅ Producto añadido al carrito");
  };

  return (
    <div className="detail-container">

      <div className="detail-images">
        {img && <img src={img} alt={name} />}
      </div>

      <div className="detail-info">
        <h2>{name}</h2>

        <p><strong>Marca:</strong> {brand}</p>
        <p><strong>Categoría:</strong> {category}</p>

        <h3>${price}</h3>

        <p className="description">{description}</p>

        <button className="btn-buy" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default AccessoryDetail;
