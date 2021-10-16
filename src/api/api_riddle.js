import {axiosInstance, axiosInstanceAPI} from "./api";

// Json Server 
export const getAllRiddles = (callback) => {
    axiosInstance().get('riddles')
    .then(response=> {
        callback(true, response.data);
    }).catch(error=>{
        callback(false, error);
        console.log(error)
    })
}

// Swagger
export const getAllRiddlesAPI = (callback) => {
    axiosInstanceAPI().get('riddle/')
    .then(response=> {
        callback(true, response.data);
    }).catch(error=>{
        console.log(error)
    })
}
getAllRiddlesAPI()