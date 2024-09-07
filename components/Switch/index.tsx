import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropdownContent from '../../components/DropdownContent'
import { Switch as Sw} from 'react-native-switch';

interface SwitchProps{
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

const Switch:React.FC<SwitchProps> = (props) => {
  const {isEnabled, setIsEnabled} = props
  const toggleSwitch = ()=>{
      setIsEnabled(prevState=> !prevState)
  }

  return (
    // <View style={styles.container}>
      <View style={styles.container}>
     {/* <DropdownContent/>  */}
     <Sw
     containerStyle = {styles.switchContainer}
     activeTextStyle ={[styles.textContainer, {color: 'black'}]}
     inactiveTextStyle ={[styles.textContainer]}
    value={isEnabled}
    onValueChange={toggleSwitch}
    disabled={false}
    activeText={'online'}
    inActiveText={'offline'}
    circleSize={65}
    barHeight={55}
    circleBorderWidth={4}
    circleBorderActiveColor='white'
    backgroundActive={'white'}
    backgroundInactive={'gray'}
    circleActiveColor={'#B80028'}
    circleInActiveColor={'#000000'}
    // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={true}
    renderInActiveText={true}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />
    </View>
    // </View>
  )
}

export default Switch

const styles = StyleSheet.create({

      container:{
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        transform: [{scale: 0.7}],
        flex: 1,
        // backgroundColor: 'pink'
      },
      switchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 4,
        width: 100,
        height: 50,
      flex: 1,
    },
       textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        width: '90%',
        fontSize: 27,

        // backgroundColor: 'brown',
        flexDirection: 'row'
       }
})