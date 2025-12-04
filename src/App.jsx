import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AccessorieForm from "./components/AccesoriosForm.jsx";
import AccessoryDetail from "./pages/AccessoryDetail.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Accessories from "./pages/Accessories.jsx";
import Carrito from "./pages/Carrito.jsx";  
import "./styles/layout.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route path="home" element={<Home />} />
        
        <Route path="accesorios" element={<Accessories />} />
        
        <Route path="crear" element={<AccessorieForm />} />
        
        <Route path="accesorio/:id" element={<AccessoryDetail />} />
        
        <Route path="login" element={<Login />} />

        <Route path="carrito" element={<Carrito />} />  

      </Route>
    </Routes>
  );
}

export default App;
