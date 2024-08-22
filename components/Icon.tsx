import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    source?: ImageSourcePropType | undefined;
    size?: number;

}

const Icon:React.FC<Props> = ({source, size}) => {
  return (
    <View style={[styles.container, {borderRadius: size, width: size, height:size, backgroundColor:'white'}]}>
        <Image source={source} style={{height:size, width: size, resizeMode:'contain'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        elevation: 5.59,
        shadowRadius: 5.59,
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 11,
      },
})

export default Icon