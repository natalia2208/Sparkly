import { useAuth } from "../hooks/useAuth.jsx";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo2-removebg-preview.png";

const Layout = () => {

  const [count, setCount] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState(false); // << SUBMENÚ
  const { currentUser } = useAuth();


  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCount(cart.length);
    };

    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  return (
    <div className="layout-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">

          {/* LOGO */}
          <div className="navbar-logo">
            <img src={logo} className="logo" alt="Logo" />
            <span className="brand-name">Sparkly</span>
          </div>

          {/* MENÚ */}
          <div className="menu">

            {/* HOME + SUBMENÚ */}
            <div
              className="submenu-container"
            >
              <Link to="/home" className="menu-link">
                <i className="fa-solid fa-house"></i>
                Home
              </Link>

            </div>

            {/* ACCESORIOS */}
            <Link to="/accesorios" className="menu-link">
              <i className="fa-solid fa-star"></i>
              Accesorios
            </Link>

            {/* CARRITO */}
            <Link to="/carrito" className="menu-link carrito-link">
              <i className="fa-solid fa-cart-plus"></i>
              Carrito
              {count > 0 && <span className="cart-count">{count}</span>}
            </Link>

            <Link to="/crear" className="menu-link flex items-center gap-2">
              <i className="fa-solid fa-plus"></i>
              <span>Agregar accesorio</span>
            </Link>
            
            {/* LOGIN */}
            <Link to="/login" className="menu-link flex items-center gap-2">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <span>Login</span>
            </Link>

          </div>
        </div>
      </nav>

        {currentUser && (
          <div style={{ marginTop: "10px", textAlign: "right", paddingRight: "30px" }}>
            <span className="text-sm font-semibold text-pink-600">
              Bienvenida, {currentUser.nombre}
        </span>
      </div>
    )
  }

      {/* CONTENIDO DE LAS PÁGINAS */}
      <Outlet />
    </div>
  );
};

export default Layout;
