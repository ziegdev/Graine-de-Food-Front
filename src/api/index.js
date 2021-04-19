import axios from 'axios';

export default axios.create({
    baseURL: 'http://54.196.211.25',
    timeout: 5000,
  });
