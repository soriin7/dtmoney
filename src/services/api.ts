import axios from 'axios';

export const api = axios.create({
  baseURL: 'ttp://localhost:3000/api',
})