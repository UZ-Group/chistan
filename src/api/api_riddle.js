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
// <Riddles List 
export const getAllRiddlesAPI = (callback) => {
    axiosInstanceAPI().get('riddle/')
    .then(response=> {
        callback(true, response.data);
    }).catch(error=>{
        // alert(error)
    })
}
// <Riddles List
// <Riddles id
export const getAllRiddlesID = (toNumber, callback) => {
    axiosInstanceAPI().get(`riddle/${toNumber}/`)
    .then(response=> {
        callback(true, response.data);  
    }).catch(error=>{
        // alert(error)
    })
}
getAllRiddlesID()
// Riddles id>