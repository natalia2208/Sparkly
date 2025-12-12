import axios from 'axios';

const BASE_URL = "https://tu-url-de-mockapi.com/api/v1"; // <-- pon la URL de tu MockAPI

if (!BASE_URL) {
  console.warn("BASE_URL no está definida. Configura tu URL.");
}

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const getAccessories = async () => {
  const url = "/accessories";
  const response = await http.get(url);
  return response.data;
};

// Crear accesorio
export const createAccessory = async (data) => {
  const url = "/accessories";
  const response = await http.post(url, data);
  return response.data;
};

// Obtener accesorio por ID
export const getAccessoryById = async (id) => {
  const url = `/accessories/${id}`;
  const response = await http.get(url);
  return response.data;
};

// Actualizar accesorio
export const updateAccessory = async (id, data) => {
  const url = `/accessories/${id}`;
  const response = await http.put(url, data);
  return response.data;
};

// Eliminar accesorio
export const deleteAccessory = async (id) => {
  const url = `/accessories/${id}`;
  const response = await http.delete(url);
  return response.data;
};
