import axios from 'axios';

// Base API configuration
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // base endpoint
  timeout: 10000, // optional, 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;