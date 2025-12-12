import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import "../styles/form.css";

export default function Perfil() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!currentUser) {
    return <p className="text-center mt-10 text-gray-600">No has iniciado sesión.</p>;
  }

  return (
    <div className="perfil-container">
      <h2 className="perfil-titulo">👤 Perfil de usuario</h2>
      <p><strong>Nombre:</strong> {currentUser.nombre}</p>
      <p><strong>Email:</strong> {currentUser.email}</p>

      {/* <button
        onClick={logout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button> */}

       <button onClick={handleLogout} className="btn-logout">
        Cerrar sesión
      </button>
    </div>
  );
}