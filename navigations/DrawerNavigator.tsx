import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import {createDrawerNavigator, DrawerContentComponentProps} from  "@react-navigation/drawer"
import Home from '../screens/Home'
import { DrawerContent } from '../components/DrawerContent'


type DrawerProps = {}
export type DrawerParamsList = {
  Home: undefined;
  Profile: undefined
  Earnings: undefined
  
}

const DrawerNavigator: React.FC<DrawerProps> = () => {
  const Drawer = createDrawerNavigator<DrawerParamsList>()
  return (
  <Drawer.Navigator screenOptions={{headerShown: false}}
  drawerContent={(props:DrawerContentComponentProps):ReactNode=> 
    <DrawerContent {...props}/>}
  >
    <Drawer.Screen
       component={Home}
        name="Home"
       
    />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})