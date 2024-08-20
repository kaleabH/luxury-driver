import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from  "@react-navigation/drawer"
import Home from '../screens/Home'


type DrawerProps = {}
export type DrawerParamsList = {
  Home: undefined;
  Profile: undefined
  Earnings: undefined
  
}

const DrawerNavigator: React.FC<DrawerProps> = () => {
  const Drawer = createDrawerNavigator<DrawerParamsList>()
  return (
  <Drawer.Navigator>
    <Drawer.Screen
       component={Home}
        name="Home"
       
    />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})