import { axiosInstanceAPIpost } from "./api";

// <Create user
export const postCreateUser = (user ,callback) => {
        axiosInstanceAPIpost().post(`auth/users/`,user)
        .then(response=> {
            callback(true, response.statusText);
            console.log(response)
        }).catch(error=>{
            if(error.response.data.username) return callback(false, error.response.data.username[0]);
            else if(error.response.data.password) return callback(false, error.response.data.password[0])
            
        })
}
// Create user>