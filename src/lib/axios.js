import axios from "axios";
const api_url = import.meta.env.VITE_API_URL || "http://<api-url>";

const instance = axios.create({
  baseURL: api_url,
});

export default instance;
