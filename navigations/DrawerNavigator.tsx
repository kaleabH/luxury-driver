import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import {createDrawerNavigator, DrawerContentComponentProps,DrawerHeaderProps} from  "@react-navigation/drawer"
import Home from '../screens/Home'
import { DrawerContent } from '../components/DrawerContent'
import EIcon from 'react-native-vector-icons/Entypo';
import Icon from '../components/Icon'


type DrawerProps = {}
export type DrawerParamsList = {
  Home: undefined;
  Profile: undefined
  Earnings: undefined
  
}

const DrawerNavigator: React.FC<DrawerProps> = () => {
  const Drawer = createDrawerNavigator<DrawerParamsList>()
  return (
  <Drawer.Navigator 
   drawerPosition="right"
  screenOptions={{  header:(props:DrawerHeaderProps):ReactNode=>(

    <View style={styles.menuAndLogoContainer}>
      <View style={styles.headerContainer}>
            <TouchableOpacity
              style={{zIndex:1, backgroundColor: "white",width:40, height:40, alignItems:"center", justifyContent:"center", borderRadius:20 }}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            >
              <Icon size={32} source={require('../assets/icons/avatar.png')}/>
            </TouchableOpacity>
    
       {/* <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={{ height: 55, width: 55}}
              />
        </View> */}
    </View>
          
          {/* <View
          style={styles.searchContainer}
          >
            <Search
              value={value}
              handleChange={(text) => {
                setValue(text)
              }}
            />
          </View> */}
         
      </View>)}}
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: "90%",
    justifyContent:'flex-end',
    alignItems: 'center',
    alignSelf:"center",
    position: "absolute",
    top: 50,
    left:20,
    borderRadius: 10,
    height: 45,
    // backgroundColor: "#FFFFFF"

},
searchContainer: {
    width: "83%",
    marginLeft:"12%",
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
  menuAndLogoContainer:{
    marginTop:20,
    flex:2,
  }
})