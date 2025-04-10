import axios from 'axios';

const BASE_URL = "https://movie-backend-obin.onrender.com/api/v1/cinema";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }, 
});

export default axiosInstance;