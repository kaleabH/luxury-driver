import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './../theme';
import Login, { LoginScreenProps } from '../screens/Login';
import Register, { RegisterScreenProps } from '../screens/Register';
import Verification, { VerificationPropsList } from '../screens/Verification';
import DrawerNavigator, {DrawerParamsList}  from './DrawerNavigator';
import TestScreen from '../screens/TestScreen';
import LoginWithEmail, { LoginWithEmailPropsList } from '../screens/LoginWithEmail';
import AuthContext, { User } from '../contexts/AuthContext'
import {loadAuthUser} from '../services/AuthService'

export type StackParamsList = {
    // Home: undefined;
    Login: LoginScreenProps;
    LoginWithEmail: LoginWithEmailPropsList;
    Register: RegisterScreenProps;
    Verification:VerificationPropsList;
    TestScreen: undefined;
    DrawerNavigator: NavigatorScreenParams<DrawerParamsList>
    // DrawerNavigator: undefined;

}

type StackProps  ={

}


const StackNavigator: React.FC<StackProps> = ()=> {
    const [user, setUser] = useState<User>()
    const Stack = createStackNavigator<StackParamsList>()

    useEffect(()=>{
        async function runEffect(){
            try{
                const user = await loadAuthUser();
                setUser(user);

            } catch(e){
                console.log('Failed to load user', e)
            }
        }
        runEffect()

    },[])
  return (
    <AuthContext.Provider value={{user, setUser}}>

    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
            {
             (
             <>
           
            <Stack.Screen
               component={DrawerNavigator}
                name={"DrawerNavigator"}
            />
            {/* </>
            )
            :
            (
                <> */}
            <Stack.Screen
               component={Login}
               name={"Login"}

            />
            <Stack.Screen
               component={LoginWithEmail}
               name={"LoginWithEmail"}

            />

             <Stack.Screen
                 component={Register}
                 name="Register"
             />
               <Stack.Screen
                  component={Verification}
                  name="Verification"
             />
             <Stack.Screen
                  component={TestScreen}
                  name="TestScreen"
             />
             </>)
}
        </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default StackNavigator