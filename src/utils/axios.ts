import {API_URL} from '@env';
import axios from 'axios';

const HustItClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    useQueryString: 'true',
  },
  withCredentials: true,
});

HustItClient.interceptors.request.use(
  function (config) {
    // console.log('request: ', config);

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

HustItClient.interceptors.response.use(
  function (response) {
    // console.log('response: ', response);

    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export default HustItClient;
