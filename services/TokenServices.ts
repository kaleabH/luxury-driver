
import * as SecureStore from 'expo-secure-store'
let token: string|null  = null;

export const setToken = async (newToken: string|null): Promise<void>=>{

    token = newToken;
    console.log('the token is ', token)
    if(token !== null){
        await SecureStore.setItemAsync('token', token)
    }
     await SecureStore.deleteItemAsync('token');
}

export const getToken = async (): Promise<string|null> => {
   if(token !== null){
     return token
   }
    token = await SecureStore.getItemAsync('token')
    return token;
}