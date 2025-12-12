import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Perfil from "./pages/Perfil.jsx";
import AccesoriosForm from "./components/AccesoriosForm.jsx";
import AccessoryDetail from "./pages/AccessoryDetail.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Accessories from "./pages/Accessories.jsx";
import Carrito from "./pages/Carrito.jsx";  
import { AuthProvider } from "./hooks/useAuth.jsx";
import "./styles/layout.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="perfil" element={<Perfil />} />

        {/* REDIRECCIÓN AUTOMÁTICA AL HOME */}
        <Route index element={<Navigate to="/home" />} />

        <Route path="home" element={<Home />} />
        <Route path="accesorios" element={<Accessories />} />
        <Route path="crear" element={<AccesoriosForm />} />
        <Route path="accesorio/:id" element={<AccessoryDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
