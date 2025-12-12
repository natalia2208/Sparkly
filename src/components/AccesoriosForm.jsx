import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccessory } from "../services/accessoriesApi.js";

export default function AccesoriosForm() {
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
      className="accessory-form"
    >
      <h2 className="accessory-title">Agregar accesorio</h2>

      {mensaje && <p className="form-success">{mensaje}</p>}

      {/* NOMBRE */}
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="accessory-input"
          placeholder="Nombre del accesorio"
        />
        {errors.nombre && (
          <p className="accessory-error">{errors.nombre}</p>
        )}
      </div>

      {/* CATEGORÍA */}
      <div className="form-group">
        <label>Categoría</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          className="accessory-input"
        >
          <option value="">Selecciona…</option>
          <option value="collares">Collares</option>
          <option value="pulseras">Pulseras</option>
          <option value="aretes">Aretes</option>
          <option value="anillos">Anillos</option>
        </select>
        {errors.categoria && (
          <p className="accessory-error">{errors.categoria}</p>
        )}
      </div>

      {/* MARCA */}
      <div className="form-group">
        <label>Marca</label>
        <input
          type="text"
          name="marca"
          value={form.marca}
          onChange={handleChange}
          className="accessory-input"
          placeholder="Marca"
        />
        {errors.marca && (
          <p className="accessory-error">{errors.marca}</p>
        )}
      </div>

      {/* PRECIO */}
      <div className="form-group">
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          className="accessory-input"
          placeholder="Precio en COP"
        />
        {errors.precio && (
          <p className="accessory-error">{errors.precio}</p>
        )}
      </div>

      {/* IMAGEN */}
      <div className="form-group">
        <label>Imagen (URL)</label>
        <input
          type="text"
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
          className="accessory-input"
          placeholder="https://..."
        />
        {errors.imagen && (
          <p className="accessory-error">{errors.imagen}</p>
        )}
      </div>

      <button
        type="submit"
        className="btn-accessory"
      >
        Agregar
      </button>
    </form>
  );
}
