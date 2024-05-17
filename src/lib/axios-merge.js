import axios from 'axios';
import config from '@/config';

const BASE_URL = config.api;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

 

export default axiosInstance;
