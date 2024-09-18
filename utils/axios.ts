import axiosLib from "axios"
import { getToken } from "../services/TokenServices"

const axios = axiosLib.create({
    baseURL: 'http:localhost:80/api',
    headers: {
        accept: "application/json",
    },
})

axios.interceptors.request.use(async (req) =>{
    const token = await getToken();

    if (token ! == null){
        req.headers["Authorization"] = `Bearer ${token}`;
    }
     
    return req;
})

export default axios;