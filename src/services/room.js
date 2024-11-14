import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}rooms/`;

//* Create
export function create(formData) {
  return axios.post(BASE_URL, formData);
}

//* Index
export function index() {
  return axios.get(BASE_URL);
}

//* Show
export function show(roomId) {
  return axios.get(`${BASE_URL}/${roomId}`);
}

//* Update
export function update(roomId, formData) {
  return axios.put(`${BASE_URL}/${roomId}`, formData);
}

//* Delete
export function remove(roomId) {
  return axios.delete(`${BASE_URL}/${roomId}`);
}
