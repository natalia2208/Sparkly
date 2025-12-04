import { useState, useEffect } from "react";
import { getUsers, createUser } from "../services/usersApi";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // cargar usuarios al inicio
  useEffect(() => {
    const loadUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };
    loadUsers();
  }, []);

  // función para registrar un nuevo usuario
  const addUser = async (user) => {
    const created = await createUser(user);
    setUsers((prev) => [...prev, created]);
    return created;
  };

  return { users, loading, addUser };
}
