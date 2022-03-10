import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://node-server-f05aytieu-zdeep10.vercel.app"
});

export default api;
