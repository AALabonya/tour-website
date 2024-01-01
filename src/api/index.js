import axios from "axios";
import { clearCookie } from "./authshare";

const axiosSecure = axios.create({
    baseURL:"http://localhost:5000/",
    withCredentials: true,
})
//interceptor response and check for unauthorized
 axiosSecure.interceptors.response.use(
    response=>response, 
    async(error)=>{
        console.log("Error tracked in the interceptor", error.response);
        if(error.response && (
            error.response.status === 401 || error.response.status === 403)
            ){
                await clearCookie()
                window.location.replace('/login')
            }
            return Promise.reject(error)
    })

export default axiosSecure;