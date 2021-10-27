import { axiosInstanceAPIanswer } from "./api";

// <Create user
export const postAnswer = (ans ,callback) => {
        axiosInstanceAPIanswer().post(`comment/`,ans)
        .then(response=> {
            callback(true, response.statusText);
            // console.log(response)
        }).catch(error=>{
            // callback(false, error);
            console.log(error.response)     
        })
}
// Create user>