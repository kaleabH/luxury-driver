import axiosLib from "axios"
import { getToken } from "../services/TokenServices"

const axios = axiosLib.create({
    baseURL: 'http://192.168.8.102:8000/api',
    headers: {
        "User-Agent": 'luxury-driver',
        Accept: "application/json",
        "Content-Type": "application/json"
    },
})

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(async (req) =>{

    console.log('the sent request', req);
    const token = await getToken();

    if (token ! == null){
        req.headers["Authorization"] = `Bearer ${token}`;
    }
     
    return req;
},
error=> console.log('request error', error)
)

axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
  }, error => {
    console.error('Response Error:', error);
    if (error.response) {
      console.log('Response Status:', error.response.status);
      console.log('Response Headers:', error.response.headers);
      console.log('Response Data:', error.response.data);
    } else if (error.request) {
      console.log('Request Data:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error);
  });

export default axios;