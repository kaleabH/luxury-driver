// import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native'
import React, { useState } from 'react'
import DropdownContent from '../../components/DropdownContent'
import { Switch } from 'react-native-switch';
import { Image } from 'react-native';
import AcceptSlider from '../../components/AcceptSlider';
import RideRequest from '../../components/RideRequest';


// iimport React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDecay } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MODAL_HEIGHT = 200;

const SmoothPannableContainer = () => {
  // The translation value along the Y-axis
  const translateY = useSharedValue(0);
  const startY = useSharedValue(0); // To store the Y position at the start of the gesture

  // Define the animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  // Handle the gesture (while dragging)
  const handleGesture = (event: any) => {
    // Keep the movement smooth by adding the change to the starting Y position
    translateY.value = startY.value + event.nativeEvent.translationY;
  };

  // Handle the end of the gesture
  const handleGestureEnd = (event: any) => {
    // Keep the container within bounds (snap to limits smoothly)
    if (translateY.value < -SCREEN_HEIGHT / 3) {
      translateY.value = withSpring(-SCREEN_HEIGHT / 3); // Limit how far up it can go
    } else if (translateY.value > SCREEN_HEIGHT / 3) {
      translateY.value = withSpring(SCREEN_HEIGHT / 3); // Limit how far down it can go
    } else {
      // Optionally add momentum with decay for natural movement
      translateY.value = withDecay({
        velocity: event.nativeEvent.velocityY, // Decay with the velocity of the swipe
        clamp: [-SCREEN_HEIGHT / 3, SCREEN_HEIGHT / 3], // Restrict movement to this range
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Parent container */}
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.oldState === 4) { // 4 is `END` state in gesture handler
            startY.value = translateY.value; // Reset starting Y when gesture ends
            handleGestureEnd(event);
          }
        }}
      >
        {/* Child container */}
        <Animated.View style={[styles1.childContainer, animatedStyle]}>
          {/* You can put content inside this container */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  childContainer: {
    width: '80%',
    height: MODAL_HEIGHT,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

// export default SmoothPannableContainer;




const TestScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = ()=>{
      setIsEnabled(prevState=> !prevState)
  }

  return (
    <View style={styles.container}>
      {/* < DropdownNotification/> */}
      {/* <SlideDownModal/> */}
      <SmoothPannableContainer/>
      {/* <View style={styles.switchMainContainer}> */}
       <AcceptSlider/>
       {/* <RideRequest/> */}
    {/* </View> */}
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
      },
      switchMainContainer:{
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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