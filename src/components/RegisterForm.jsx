import { useState } from "react";
import { useUsers } from "../hooks/useUsers.js";
import "../styles/form.css";

export default function RegisterForm({ onToggle }) {
  const { addUser } = useUsers();
  const [form, setForm] = useState({ email: "", password: "", nombre: "" });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setMensaje("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.nombre.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

try {
      setLoading(true);
      await addUser(form);
      setMensaje("✔ Cuenta creada con éxito");
      setForm({ nombre: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError("No se pudo crear la cuenta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2 className="form-title">Registro</h2>

      {mensaje && <p className="form-success">{mensaje}</p>}
      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label>Nombre</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="form-input"
          placeholder="Nombre completo"
        />
      </div>

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
        disabled={loading}
      >
        {loading ? "Creando..." : "Crear cuenta"}
      </button>
    </form>
  );
}

