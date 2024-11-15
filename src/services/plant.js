import axios from "./interceptors";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}plants`;

//* Index
export function index() {
  return axios.get(`${BASE_URL}/`);
}

//* Show
export function show(plantId) {
  return axios.get(`${BASE_URL}/${plantId}/`);
}
