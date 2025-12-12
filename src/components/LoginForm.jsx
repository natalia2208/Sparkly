import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import RegisterForm from "./RegisterForm.jsx";
import { useEffect } from "react";
import "../styles/form.css";

export default function LoginForm() {
  const { login, currentUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/perfil");
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setMensaje("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    console.log("Datos del formulario:", form);

    const ok = await login(form.email, form.password);

    if (ok) {
      setMensaje("✔ Inicio de sesión exitoso");
      setTimeout(() => navigate("/perfil"), 1500);
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="form-container">
      {mostrarRegistro ? (
      <RegisterForm onToggle={() => setMostrarRegistro(false)} />
      ) : (
        <form onSubmit={handleSubmit} className="form-card">
          <h2 className="form-title">Iniciar sesión</h2>
          
          {mensaje && <p className="form-success">{mensaje}</p>}
          {error && <p className="form-error">{error}</p>}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Contraseña"
            />
          </div>

          <button
            type="submit"
            className="btn-login"
          >
            Entrar
          </button>
        </form>
      )}

      <button
        onClick={() => setMostrarRegistro(!mostrarRegistro)}
        className="btn-toggle"
      >
        {mostrarRegistro ? "Ya tengo cuenta" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
}
