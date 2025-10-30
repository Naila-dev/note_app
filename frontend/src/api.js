import axios from "axios";

const api = axios.create({
  baseURL: "https://note-app-1-ivyl.onrender.com/api", // your backend server
});

export default api;
