import axios from "axios";

// создаем экземпляр
const ApiService = axios.create({
    baseURL: "http://localhost:3001", // твой backend
    timeout: 2000
});

export default ApiService;
