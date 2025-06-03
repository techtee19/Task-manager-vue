import axios from 'axios';

// Base API configuration
const API_URL = 'https://683ef4851cd60dca33ddb742.mockapi.io';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    const url = new URL(config.baseURL + config.url);
    console.log(`API Request: ${config.method.toUpperCase()} ${url.toString()}`, 
      config.params || config.data || '');
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  response => {
    console.log(`API Response Success: ${response.status} ${response.config.method.toUpperCase()} ${response.config.url}`, 
      response.data);
    return response;
  },
  error => {
    console.error('API Response Error:', error);
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Response Status:', error.response.status);
      console.error('Response Headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    console.error('Request Config:', error.config);
    return Promise.reject(error);
  }
);

export { API_URL };
export default api;