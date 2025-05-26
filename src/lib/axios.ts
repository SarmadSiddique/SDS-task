import axios from "axios";

// Create an axios instance with default config
const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
