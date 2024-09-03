import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropdownContent from '../../components/DropdownContent'

const TestScreen = () => {
  return (
    <View style={styles.container}>
     <DropdownContent/> 
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})