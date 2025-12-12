import { useState, useEffect } from "react";
import { getUsers, createUser } from "../services/usersApi";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para el error

  // cargar usuarios al inicio
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true); // Iniciar carga
      setError(null); // Limpiar error anterior
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error al cargar usuarios:", err);
        setError("No se pudieron cargar los usuarios."); // Establecer el error
      } finally {
        setLoading(false); // Finalizar carga
      }
    };
    loadUsers();
  }, []);

  // función para registrar un nuevo usuario
  const addUser = async (user) => {
    try {
      const created = await createUser(user);
      setUsers((prev) => [...prev, created]);
      return created;
    } catch (err) {
      console.error("Error al crear usuario:", err);
      setError("No se pudo crear el usuario."); // Establecer el error
      throw err; // Re-lanzar el error para que el componente lo maneje
    }
  };

  return { users, loading, addUser, error }; // Incluir el error
}
