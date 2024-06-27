import axios from 'axios';

// Axios instance for API calls.
export const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});