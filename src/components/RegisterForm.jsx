import { useState } from "react";
import { useUsers } from "../hooks/useUsers.js";

export default function RegisterForm() {
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

try {
      setLoading(true);
      await addUser(form);
      setMensaje("✔ Cuenta creada con éxito");
      setForm({ nombre: "", email: "", password: "" });
    } catch (err) {
      setError("No se pudo crear la cuenta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Registro</h2>

      {mensaje && <p className="text-green-600 mb-3">{mensaje}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <div className="mb-3">
        <label>Nombre</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Nombre"
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Correo"
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Contraseña"
        />
      </div>

      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded mt-3"
        disabled={loading}
      >
        {loading ? "Creando..." : "Crear cuenta"}
      </button>
    </form>
  );
}

