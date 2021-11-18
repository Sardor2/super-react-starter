import axios from 'axios';
import { API_URL } from '../configs/app.config';

const request = axios.create({
  baseURL: API_URL,
});

request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default request;
