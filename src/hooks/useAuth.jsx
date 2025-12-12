import { useState, useEffect, createContext, useContext } from "react";
import { getUsers } from "../services/usersApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser'); // Eliminar al cerrar sesión
    }
  }, [currentUser]);

  const login = async (email, password) => {
    try {
      // Obtener la lista de usuarios de MockAPI
      const users = await getUsers();

      console.log("Datos de los usuarios:", users);

      // Filtrar la lista de usuarios para encontrar un usuario que coincida con las credenciales
      const user = users.find(u => u.email === email && u.password === password);

      // Si se encuentra un usuario, actualizar el estado del usuario
      if (user) {
        setCurrentUser(user);
        return true; // Inicio de sesión exitoso
      } else {
        // Si no se encuentra un usuario, mostrar un mensaje de error
        return false; // Credenciales incorrectas
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false; // Error al obtener usuarios
    }
  };

  const logout = () => setCurrentUser(null);

  const value = { currentUser, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
