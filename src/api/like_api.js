import {axiosInstancelike} from "./api";


// <Like
export const postLike = (id, callback) => {
    axiosInstancelike().post(`${id}/like`)
    .then(response=> {
        // callback(true, response.data);
        // console.log(response)
    }).catch(error=>{
        if(callback) {
            // callback(false ,error.response.data.detail)
        }
        console.log(error.response);
    })
}
// Like>
// <DisLike
export const postdisLike = (id, callback) => {
    axiosInstancelike().post(`${id}/dislike`)
    .then(response=> {
        // callback(true, response.data);
        // console.log(response)
    }).catch(error=>{
        if(callback) {
            // callback(false ,error.response.data.detail)
        }
        console.log(error.response);
    })
}
// DisLike>
