import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './../theme';
import Login, { LoginScreenProps } from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import DrawerNavigator, {DrawerParamsList}  from './DrawerNavigator';
import TestScreen from '../screens/TestScreen';

export type StackParamsList = {
    // Home: undefined;
    Login: LoginScreenProps;
    Register: undefined;
    Verification: {phoneNumber: string, otp: string};
    TestScreen: undefined;
    DrawerNavigator: NavigatorScreenParams<DrawerParamsList>

}

type StackProps  ={

}


const StackNavigator: React.FC<StackProps> = ()=> {
    const Stack = createStackNavigator<StackParamsList>()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
            <Stack.Screen
               component={Login}
               name={"Login"}

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
            <Stack.Screen
               component={DrawerNavigator}
                name={"DrawerNavigator"}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator