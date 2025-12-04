import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo2-removebg-preview.png";
import "../styles/layout.css";

const Layout = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCount(cart.length);
    };

    updateCart(); // al cargar

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <nav>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 30px"
        }}>

          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} className="logo" alt="Logo" />
            <span className="titulo">Sparkly</span>
          </div>

          {/* MENU */}
          <div className="menu">

            <Link to="/home" className="flex items-center gap-2">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </Link>

            <Link to="/accesorios" className="flex items-center gap-2">
              <i className="fa-solid fa-star"></i>
              <span>Accesorios</span>
            </Link>

            <Link to="/carrito" className="flex items-center gap-2 carrito-link">
              <i className="fa-solid fa-cart-plus"></i>
              <span>Carrito</span>

              {count > 0 && (
                <span className="cart-count">{count}</span>
              )}
            </Link>

            <Link to="/login" className="flex items-center gap-2">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <span>Login</span>
            </Link>

          </div>
        </div>
      </nav>

      {/* CONTENIDO */}
      <div className="container">
        <div className="banner">
          Bienvenido a Sparkly ✨ Accesorios con estilo
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
