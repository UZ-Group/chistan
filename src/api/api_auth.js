import { axiosInstanceAPIpost, axiosInstanceLogout } from "./api";

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
// <Login user
export const postLoginUser = (user ,callback) => {
    axiosInstanceAPIpost().post(`auth/token/login/`,user)
    .then(response=> {
        callback(true, response);
        // console.log(response)
    }).catch(error=>{
        callback(false, error.response.data.non_field_errors[0]);
    })
}
// Login user>
// <Logout user
export const postLogoutUser = () => {
    axiosInstanceLogout().post(`auth/token/logout/`)
    .then(response=> {
        // callback(true, response);
        console.log(response)
    }).catch(error=>{
        // callback(false, error.response.data.non_field_errors[0]);
        console.log(error.response)
    })
}
// Logout user>
// <Get User Me
export const getUserMe = (callback) => {
    axiosInstanceLogout().get(`auth/users/me/`)
    .then(response=> {
        callback(true, response);
        // console.log(response)
    }).catch(error=>{
        // callback(false, error.response.data.non_field_errors[0]);
        console.log(error.response)
    })
}
// Get User Me>