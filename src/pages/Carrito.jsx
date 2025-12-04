import { useEffect, useState } from "react";
import "../styles/layout.css";

export default function Carrito() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const eliminar = (id) => {
    const nuevo = cart.filter(item => item.id !== id);
    setCart(nuevo);
    localStorage.setItem("cart", JSON.stringify(nuevo));
  };

  if (cart.length === 0) {
    return <h2 className="empty-cart">🛒 Tu carrito está vacío</h2>;
  }

  return (
    <div className="carrito-contenedor">

      <h1 className="carrito-titulo">Tu carrito 🛍</h1>

      <div className="carrito-grid">

        {cart.map(producto => (

          <div key={producto.id} className="carrito-card">

            <img
              src={producto.image}
              alt={producto.name}
              className="carrito-img"
            />

            <div className="carrito-info">

              <h2>{producto.name}</h2>

              <p className="carrito-precio">${producto.price}</p>

              <button
                onClick={() => eliminar(producto.id)}
                className="carrito-btn"
              >
                Eliminar
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
