import { axiosInstanceAPI } from "./api";

// <Create user
export const postCreateUser = (user ,callback) => {
    axiosInstanceAPI().post(`auth/users/`,user)
    .then(response=> {
        callback(true, response.data);
    }).catch(error=>{
        callback(false, error.response.data.message);
    })
}
// Create user>