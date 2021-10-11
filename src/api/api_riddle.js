import {axiosInstance} from "./api";


export const getAllRiddles = (callback) => {
    axiosInstance().get('riddles')
    .then(response=> {
        callback(true, response.data);
    }).catch(error=>{
        callback(false, error);
        console.log(error)
    })
}