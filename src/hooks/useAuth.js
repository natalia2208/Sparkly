import { useState } from "react";
import { getUsers } from "../services/usersApi";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    const users = await getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true; // login exitoso
    }
    return false; // credenciales incorrectas
  };

  const logout = () => setCurrentUser(null);

  return { currentUser, login, logout };
}
