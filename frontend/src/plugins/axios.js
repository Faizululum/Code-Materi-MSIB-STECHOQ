import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const apiClient = axios.create({
    baseURL: 'https://inventory-management-backend-msib-stechoq.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    const token = authStore.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;