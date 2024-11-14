import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}plants/`;

//* Index
export function index() {
  return axios.get(BASE_URL);
}

//* Show
export function show(roomId) {
  return axios.get(`${BASE_URL}/${roomId}`);
}
