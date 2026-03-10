import axios from "axios";
import {useAuthStore} from "../../stores/auth-store.ts";

const ApiService = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 2000
});

ApiService.interceptors.request.use((config) => {
        const token: string = useAuthStore.getState().token.value;

        if (token) {
            config.headers?.set("Authorization", `${token}`);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

ApiService.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            useAuthStore.getState().resetToken();
            window.location.href = "/login"
        }

        return Promise.reject(error)
    }
)

export default ApiService;
