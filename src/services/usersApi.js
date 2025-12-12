import axios from "axios";

const BASE_URL = "https://693074d6778bbf9e00717c82.mockapi.io/api/v1/usuarios";
const http = axios.create({ baseURL: BASE_URL });

export const getUsers = async () => {
  try {
    const res = await http.get("/");
    return res.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error; 
  }
};

export const createUser = async (user) => {
  try {
    const res = await http.post("/", user);
    return res.data;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error; 
  }
};
