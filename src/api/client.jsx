import axios from "axios";


const BASE_URL = 'https://chapel-backend-8233dc7a7600.herokuapp.com/api/v1';

const client = axios.create({ baseURL: BASE_URL });

// Add a request interceptor to add the authentication token to every request
client.interceptors.request.use(
    function (config) {


        return config;
    },
    function (error) {
        // Handle request errors
        return Promise.reject(error);
    }
);

export default client;