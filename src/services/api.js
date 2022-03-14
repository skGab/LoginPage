import axios from "axios";

const api = axios.create({
  baseURL: "https://nodeaplication.herokuapp.com"
});

export default api;
