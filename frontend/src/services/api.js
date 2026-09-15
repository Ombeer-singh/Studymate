
import axios from "axios";

const api = axios.create({
  baseURL: "https://studymate-backend-24al.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;