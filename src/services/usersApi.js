import axios from "axios";

const BASE_URL = "https://693074d6778bbf9e00717c82.mockapi.io/api/v1/usuarios";
const http = axios.create({ baseURL: BASE_URL });

export const getUsers = async () => {
  const res = await http.get("/usuarios");
  return res.data;
};

export const createUser = async (user) => {
  const res = await http.post("/usuarios", user);
  return res.data;
};
