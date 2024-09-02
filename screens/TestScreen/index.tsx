import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})