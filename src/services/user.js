import axios from "axios";
import { setToken } from "../utilities/auth";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}users`;

export async function signup(formData) {
  const { data } = await axios.post(`${BASE_URL}/signup/`, formData);

  if (data.token) {
    setToken(data.token);
  }

  return data;
}

export async function signin(formData) {
  const { data } = await axios.post(`${BASE_URL}/signin/`, formData);

  if (data.token) {
    setToken(data.token);
  }

  return data;
}
