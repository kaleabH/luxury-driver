import { View, Text, StyleSheet } from 'react-native'
import React, { ReactElement, useEffect, useState } from 'react'
import Icon from './Icon'
import Widgets, { ChildrenParams } from './Widgets';
import {Provider, Portal, Modal} from 'react-native-paper'
import Switch from './Switch';


const size = 70;
type Props = {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

const withWidgets = (WrappedScreen: React.ElementType) => {

  
  
  return ()=>{ 
    const [isEnabled, setIsEnabled] = useState(true);

    
    useEffect(()=>{
      console.log('the enabled is ', isEnabled)
    },[isEnabled])
    
    return (
    <Provider>
      <Portal>
      <View style={{
            flex: 1,
            width: '100%',
            height: 0,
            position: 'absolute',
            zIndex:3,
            top: 55,
            alignSelf: 'center',
            alignItems: 'flex-end',
            backgroundColor: 'red',

          }}>
            <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
      </View>

    
        <Widgets>
          {
            ({handleCenterMap, latLng, setLatLng, mapRef}:ChildrenParams)=>(
              
              <WrappedScreen onCenterMap={handleCenterMap} latLng={latLng} setLatLng={setLatLng} mapRef={mapRef}/>
            )
          }
        {/* <Icon source={require('../assets/icons/menu_red.png')} size={size}/> */}
        </Widgets>
        <Modal visible={!isEnabled}  style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText} >OFFLINE</Text>
          </View>
        </Modal>
      </Portal>
    </Provider>




  )}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      // width:'100%',
      height: '100%'
    },
    modalContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:"#ffffffad",
      
      width: '100%',
      height: '100%'
    },
    modalText: {
      justifyContent:'center',
      alignItems: 'center',
      textAlign:'center',
      color: "#B80028",
       fontSize: 27,
       fontWeight: 'bold',
       width: '100%'
    }
})

export default withWidgets