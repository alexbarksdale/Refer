import axios from 'axios';

export const refergg = axios.create({
    baseURL: 'http://localhost:5000'
});
