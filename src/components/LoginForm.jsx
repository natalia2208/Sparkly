import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import RegisterForm from "./RegisterForm.jsx";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  

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

   const ok = await login(form.email, form.password);

if (ok) {
  setMensaje("✔ Inicio de sesión exitoso");
  setTimeout(() => navigate("/"), 1500);
} else {
  setError("Credenciales incorrectas");
}
};

 return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      {mostrarRegistro ? (
        <RegisterForm />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Iniciar sesión</h2>

          {mensaje && <p className="text-green-600 mb-3">{mensaje}</p>}
          {error && <p className="text-red-600 mb-3">{error}</p>}

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
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
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          >
            Entrar
          </button>
        </form>
      )}

      <button
        onClick={() => setMostrarRegistro(!mostrarRegistro)}
        className="mt-4 text-blue-600 underline"
      >

        {mostrarRegistro ? "Ya tengo cuenta" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
}
