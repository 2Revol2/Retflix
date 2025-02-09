import axios from "axios";
const BASE_URL = import.meta.env.VITE_KINIPOISK_BASE_URL;
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
function createInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return instance;
}
export const baseInstance = createInstance();
