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
        // baseURL : "http://127.0.0.1:8000/api/",
        baseURL : "https://chistan-shakur.fandogh.cloud/api/",
        headers : {

        }
    })
};

export const axiosInstanceAPIpost = () => {
    return axios.create({
        baseURL : "https://chistan-shakur.fandogh.cloud/api/",
        headers : {
            "Content-Type": "application/json"
        }
    })
};

export const axiosInstanceAPIanswer = () => {
    return axios.create({
        baseURL : "https://chistan-shakur.fandogh.cloud/api/",
        headers : {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
};
export const axiosInstanceLogout = () => {
    return axios.create({
        baseURL : "https://chistan-shakur.fandogh.cloud/api/",
        headers : {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
};
export const axiosInstancelike = () => {
    return axios.create({
        // baseURL : "http://127.0.0.1:8000/api/comment/",
        baseURL : "https://chistan-shakur.fandogh.cloud/api/comment/",
        headers : {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
};



// "Authorization": `Token 8dbd6ec8e60e62a5f3514c941e7a458f7ef86ad3`