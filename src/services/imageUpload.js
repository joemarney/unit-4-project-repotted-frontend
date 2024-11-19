import axios from "axios";

export function imageUpload(file) {
  return axios.postForm(import.meta.env.VITE_CLOUDINARY_URL, {
    file: file,
    upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  });
}
