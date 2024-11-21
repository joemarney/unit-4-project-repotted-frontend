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

//! WISHLIST

//? Read
export function getWishlist() {
  return axios.get(`${BASE_URL}/wishlist/`);
}

//? Create
export function addToWishlist(plantId) {
  return axios.post(`${BASE_URL}/wishlist/`, { plant: plantId });
}

//? Delete
export function removeFromWishlist(plantId) {
  return axios.delete(`${BASE_URL}/wishlist/${plantId}/`);
}
