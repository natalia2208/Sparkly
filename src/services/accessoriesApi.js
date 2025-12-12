import axios from "axios";

const BASE_URL = "https://69139b67f34a2ff1170c970c.mockapi.io/api/v1";

const http = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export async function getAccessories() {
  try {
    const res = await http.get("/accessories");
    return res.data;
  } catch (err) {
    console.log(err);
    const res2 = await http.get("/accesories");
    return res2.data;
  }
}

export async function getAccessoryById(id) {
  try {
    const res = await http.get(`/accessories/${id}`);
    return res.data;
  } catch {
    const res2 = await http.get(`/accesories/${id}`);
    return res2.data;
  }
}

export async function createAccessory(accessory) {
  try {
    const res = await http.post("/accessories", accessory);
    return res.data;
  } catch {
    const res2 = await http.post("/accesories", accessory);
    return res2.data;
  }
}

export async function updateAccessory(id, accessory) {
  try {
    const res = await http.put(`/accessories/${id}`, accessory);
    return res.data;
  } catch {
    const res2 = await http.put(`/accesories/${id}`, accessory);
    return res2.data;
  }
}

export async function deleteAccessory(id) {
  try {
    const res = await http.delete(`/accessories/${id}`);
    return res.data;
  } catch {
    const res2 = await http.delete(`/accesories/${id}`);
    return res2.data;
  }
}
