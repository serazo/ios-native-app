import axios from 'axios';

const axiosRiksiri = axios.create({
  baseURL: 'https://api.riksiri.com/api/', // Reemplaza con la URL base de tu API
  timeout: 10000, // Tiempo de espera de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRiksiri.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
  return config;
});

export default axiosRiksiri;