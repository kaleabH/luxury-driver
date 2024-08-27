import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import Icon, {IconProps} from './Icon'

interface TouchableIconProps extends IconProps{
    [key: string]: any;
    children?: ReactNode | undefined
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const TouchableIcon: React.FC<TouchableIconProps> = ({onPress, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
                {
                    !props.children ? (
                        <Icon {...props}/>
                    ): props.children
                }
                </TouchableOpacity>
  )
}

export default TouchableIcon

const styles = StyleSheet.create({
    icon:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 6.59,
        shadowRadius: 6.59,
        // transform:[{scale:1.3}],
        width: 48,
        height: 48,
        borderRadius: 48,
        marginVertical:20
    },
})