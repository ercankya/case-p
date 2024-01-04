import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // API URL'nizi buraya ekleyin
});

export default instance;
