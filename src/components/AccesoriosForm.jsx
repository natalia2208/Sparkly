import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccessory } from "../services/accessoriesApi.js";

export default function AccessorieForm() {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    marca: "",
    precio: "",
    imagen: ""
  });

  const [errors, setErrors] = useState({});
  const [mensaje, setMensaje] = useState("");

  // ------ VALIDACIONES ------
  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!form.categoria) nuevosErrores.categoria = "La categoría es obligatoria.";
    if (!form.marca.trim()) nuevosErrores.marca = "La marca es obligatoria.";
    if (!form.precio) {
      nuevosErrores.precio = "El precio es obligatorio.";
    } else if (isNaN(form.precio)) {
      nuevosErrores.precio = "Debe ser un número válido.";
    } else if (Number(form.precio) <= 0) {
      nuevosErrores.precio = "Debe ser mayor a 0.";
    }

    if (!form.imagen.trim()) {
      nuevosErrores.imagen = "La URL es obligatoria.";
    } else if (!form.imagen.startsWith("http")) {
      nuevosErrores.imagen = "Debe ser una URL válida.";
    }

    return nuevosErrores;
  };

  // ------ CAMBIOS EN FORM ------
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setMensaje("");
  };

  // ------ SUBMIT ------
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    const nuevosErrores = validar();
    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) return;

    const nuevoAccesorio = {
      nombre: form.nombre,
      categoria: form.categoria,
      marca: form.marca,
      precio: Number(form.precio),
      imagen: form.imagen
    };

    try {
      await createAccessory(nuevoAccesorio);
      setMensaje("✔ Accesorio agregado correctamente");

      // Reset
      setForm({
        nombre: "",
        categoria: "",
        marca: "",
        precio: "",
        imagen: ""
      });

      setErrors({});

      // Volver al listado principal para que Home vuelva a traer los datos
      navigate("/");
    } catch (error) {
      console.error(error);
      setMensaje(
        error?.message || "Ocurrió un error al crear el accesorio. Intenta de nuevo."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-semibold mb-4">Agregar accesorio</h2>

      {mensaje && <p className="mb-3 text-green-600">{mensaje}</p>}

      {/* NOMBRE */}
      <div className="mb-3">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.nombre && (
          <p className="text-red-600 text-sm">{errors.nombre}</p>
        )}
      </div>

      {/* CATEGORÍA */}
      <div className="mb-3">
        <label>Categoría</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Selecciona…</option>
          <option value="collares">Collares</option>
          <option value="pulseras">Pulseras</option>
          <option value="aretes">Aretes</option>
          <option value="anillos">Anillos</option>
        </select>
        {errors.categoria && (
          <p className="text-red-600 text-sm">{errors.categoria}</p>
        )}
      </div>

      {/* MARCA */}
      <div className="mb-3">
        <label>Marca</label>
        <input
          type="text"
          name="marca"
          value={form.marca}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.marca && (
          <p className="text-red-600 text-sm">{errors.marca}</p>
        )}
      </div>

      {/* PRECIO */}
      <div className="mb-3">
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.precio && (
          <p className="text-red-600 text-sm">{errors.precio}</p>
        )}
      </div>

      {/* IMAGEN */}
      <div className="mb-3">
        <label>Imagen (URL)</label>
        <input
          type="text"
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.imagen && (
          <p className="text-red-600 text-sm">{errors.imagen}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded mt-3"
      >
        Agregar
      </button>
    </form>
  );
}
