
import * as SecureStore from 'expo-secure-store'
let token: string|null  = null;

export const setToken = async (newToken: string|null): Promise<void>=>{

    token = newToken;
    if(token !== null){
        await SecureStore.setItemAsync('auth-token', token)
    }
     await SecureStore.deleteItemAsync('auth-token');
}

export const getToken = async (): Promise<string|null> => {
   if(token !== null){
     return token
   }
    token = await SecureStore.getItemAsync('auth-token')
    return token;
}