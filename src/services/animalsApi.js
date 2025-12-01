// import axios from 'axios';

// const BASE_URL = "https://69139b79f34a2ff1170c97b4.mockapi.io/api/v1/animals";

// if (!BASE_URL) {
//     console.warn("BASE_URL id not defined. Please set the API base URL.");
// }

// const http = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export const getAnimals = async () => {
//     const url = "/animals";
//     const response = await http.get(url);
//     return response.data;
// }