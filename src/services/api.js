import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
// Create axios instance
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// ================= REQUEST INTERCEPTOR =================
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ================= RESPONSE INTERCEPTOR =================
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        // Token expired / Unauthorized
        if (error.response?.status === 401) {
            console.warn("Unauthorized! Redirecting to login...");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;