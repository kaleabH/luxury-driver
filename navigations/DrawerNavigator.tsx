import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { ReactNode, useState } from 'react'
import {createDrawerNavigator, DrawerContentComponentProps,DrawerHeaderProps} from  "@react-navigation/drawer"
import Home, { HomeScreenParams } from '../screens/Home'
import { DrawerContent } from '../components/DrawerContent'
import EIcon from 'react-native-vector-icons/Entypo';
import Icon from '../components/Icon'
import Wallet from '../screens/Wallet'
import RideHistory from '../screens/RideHistory'
import Support from '../screens/Support'


type DrawerProps = {}
export type DrawerParamsList = {
  Home: undefined;
  Wallet: undefined;
  RideHistory: undefined;
  Support: undefined;
  
}

const DrawerNavigator: React.FC<DrawerProps> = () => {
  const Drawer = createDrawerNavigator<DrawerParamsList>()
  return (
  <Drawer.Navigator
   initialRouteName='Home'
  screenOptions={{  header:(props:DrawerHeaderProps):ReactNode=>(

      <View style={styles.headerContainer}>
              <TouchableOpacity
              style={{zIndex:1, backgroundColor: "white",width:40, height:40, alignItems:"center", justifyContent:"center", borderRadius:20, marginLeft: 20}}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            >
              <Icon size={32} source={require('../assets/icons/avatar.png')}/>
            </TouchableOpacity>
       
      
  
    </View>
              )}}
  drawerContent={(props:DrawerContentComponentProps):ReactNode=> 
    <DrawerContent {...props}/>}
  
  >
  
         <Drawer.Screen
         component={Home}
         name="Home"
         
         />
         <Drawer.Screen
         component={Wallet}
         name="Wallet"
         
         />
         <Drawer.Screen
         component={RideHistory}
         name="RideHistory"
         
         />
         <Drawer.Screen
         component={Support}
         name="Support"
         
         />

  </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent:'space-between',
    alignItems: 'center',
    alignSelf:"center",
    position: "absolute",
    top: 50,
    left:0,
    borderRadius: 10,
    height: 0,
    // borderColor: 'black',
    // borderWidth: 4,
    // backgroundColor: "#2cab83"

},
searchContainer: {
    width: "83%",
    // marginLeft:"12%",
    position: "absolute",
    top: 53,
    zIndex:0,
    alignItems: "flex-end",
},
logoContainer:{
    backgroundColor: "#FFFFFF",
    borderColor:"#B80028",
    borderWidth: 2,
    borderRadius: 50,
    overflow:"hidden",
    marginRight:"38%",

},

  // menuAndLogoContainer:{
  //   marginTop:20,
  //   flex:2,
  //   borderColor: 'red',
  //   alignItems:'center',
  //   justifyContent:'center',
  //   borderWidth: 1
  // }
})