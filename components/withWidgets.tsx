import { View, Text, StyleSheet } from 'react-native'
import React, { ReactElement, useState } from 'react'
import Icon from './Icon'
import Widgets, { ChildrenParams } from './Widgets';


const size = 70;

const withWidgets = (WrappedScreen: React.ElementType) => {

  return ()=> (

        <Widgets>
          {
            ({handleCenterMap, latLng, setLatLng, mapRef}:ChildrenParams)=>(
              
              <WrappedScreen onCenterMap={handleCenterMap} latLng={latLng} setLatLng={setLatLng} mapRef={mapRef}/>
            )
          }
        {/* <Icon source={require('../assets/icons/menu_red.png')} size={size}/> */}
        </Widgets>



  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        alignItems:'center',
        justifyContent:'center'
    }
})

export default withWidgets