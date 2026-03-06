import axios from "axios";

// создаем экземпляр
const api = axios.create({
    baseURL: "http://localhost:3001", // твой backend
    timeout: 5000,
});

export default api;
