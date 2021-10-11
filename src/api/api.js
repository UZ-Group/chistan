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