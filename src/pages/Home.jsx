import { useEffect, useState } from "react";
import { getAccessories } from "../services/accessoriesService.js";
import "../styles/layout.css";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const data = await getAccessories();
        setItems(data);
      } catch (err) {
        console.error("Error fetching accessories:", err);
        setError("Error al cargar los accesorios.");
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div className="layout-container bg-pink-50">

      {/* ================= HERO ================= */}
      <section className="hero relative w-full">
        <div className="hero-overlay">
          <h1>Sparkly</h1>
        </div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <main className="content">

        {/* SOBRE NOSOTROS */}
        <section className="sobre-nosotros-box">
          <div className="sobre-nosotros">

            <h2>Sobre Nosotros</h2>
            <p>
              En Sparkly creemos que cada persona merece brillar. Nuestro
              objetivo es ofrecer accesorios hermosos y únicos para que expreses
              tu estilo con confianza.
            </p>

            {/* MISIÓN Y VISIÓN */}
            <div className="mision-vision">

              <div className="mision">
                <h3>Misión</h3>
                <p>
                  Ofrecer accesorios modernos, de alta calidad y con identidad única.
                </p>
              </div>

              <div className="vision">
                <h3>Visión</h3>
                <p>
                  Convertirnos en una marca reconocida por elegancia, creatividad 
                  y cercanía.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <h3>Contáctanos</h3>
        <p>Email: info@sparkly.com</p>
        <p>Teléfono: +57 300 123 4567</p>
        <p>Colombia</p>

        <div className="footer-social">
          <h4>Síguenos en:</h4>
          <p>• Instagram</p>
          <p>• TikTok</p>
          <p>• Facebook</p>
          <p>@sparkly.co</p>
        </div>

        <div style={{ marginTop: "10px", fontSize: "13px", opacity: "0.7" }}>
          © {new Date().getFullYear()} Sparkly — Todos los derechos reservados 
        </div>

      </footer>
    </div>
  );
}
