import axios from "axios";
const api_url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_AIRTABLE_TOKEN;

const instance = axios.create({
  baseURL: api_url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
