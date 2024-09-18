import { User } from "../contexts/AuthContext";
import axios from "../utils/axios";
import { setToken } from "./TokenServices";


export interface Credentials{
    email: string;
    password: string;
    deviceInfo: string;
} 

export const login = async (credentials: Credentials): Promise<void> =>{
    const { data } = await  axios.post('/login', credentials);
    await setToken(data.token);

}


export const loadAuthUser = async():Promise<User> => {
    const {data: user} = await axios.get<User>('/user')
    return user;
}

export const logout = async ()=>{
    await axios.post('/logout', {});
    await setToken(null);
}