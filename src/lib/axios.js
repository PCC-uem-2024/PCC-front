import axios from "axios";

export const api = axios.create({
  baseURL: 'http://35.153.33.105:80',
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(token);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
