import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './../theme';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import DrawerNavigator, {DrawerParamsList}  from './DrawerNavigator';

type StackParamsList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Verification: undefined;
    DrawerNavigator: NavigatorScreenParams<DrawerParamsList>

}

type StackProps  ={

}


const StackNavigator: React.FC<StackProps> = ()=> {
    const Stack = createStackNavigator<StackParamsList>()
  return (
    <NavigationContainer>
        <Stack.Navigator>
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
               component={DrawerNavigator}
                name={"Home"}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator