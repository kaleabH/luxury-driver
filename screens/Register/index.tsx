import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface LoginScreenProps {
    
}

const Register: React.FC<LoginScreenProps> = ()=>{
    return (
        <View style={styles.container}>
            <Text>
                Registration Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default Register;