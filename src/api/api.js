import axios from "axios";

// Json Server Demo Api's 
export const axiosInstance = () => {
    return axios.create({
        baseURL : "http://localhost:3001/",
        headers : {
            // API_KEY : "dfdg6g5fg65f6g"
        }
    })
};

// Swagger Server  Api's 
export const axiosInstanceAPI = () => {
    return axios.create({
        baseURL : "http://127.0.0.1:8000/api/",
        headers : {
            
        }
    })
};

