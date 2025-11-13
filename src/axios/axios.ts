import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/', // Reemplaza con la URL base de tu API
  timeout: 10000, // Tiempo de espera de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;