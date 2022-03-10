import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://node-server-385z136fl-zdeep10.vercel.app"
});

export default api;
