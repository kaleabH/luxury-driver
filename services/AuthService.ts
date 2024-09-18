import { User } from "../contexts/AuthContext";
import axios from "../utils/axios";
import { getToken, setToken } from "./TokenServices";


export interface Credentials{
    email: string;
    password: string;
    deviceInfo: string;
} 

export const login = async (credentials: Credentials): Promise<void> =>{
    
        const { data } = await  axios.post('/login', credentials);
        console.log('the login data', data),
        await setToken(data.token);

        console.log('logged in !! ', await getToken())

}


export const loadAuthUser = async():Promise<User> => {
    const {data: user} = await axios.get<User>('/user');
    console.log('the user is ', user);
    return user ;
}

export const logout = async ()=>{
    await axios.post('/logout', {});
    await setToken(null);
}