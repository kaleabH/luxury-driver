import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import withWidgets from '../../components/withWidgets';
interface homeScreenProps {

}
const Home : React.FC<homeScreenProps> =() => {
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withWidgets(Home)