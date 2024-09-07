import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, runOnJS } from 'react-native-reanimated';
import DropdownContent from './DropdownContent';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const DROPDOWN_HEIGHT = 200; // Height of the dropdown panel

const TopSliderSheet = () => {
  const translateY = useSharedValue(0); // Start the dropdown off-screen

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const handleGesture = (event: any) => {
    const translationY = event.nativeEvent.translationY;
    translateY.value = Math.min(0, Math.max(translationY - DROPDOWN_HEIGHT, -DROPDOWN_HEIGHT));
  };

  const handleGestureEnd = (event: any) => {
    if (translateY.value > -DROPDOWN_HEIGHT / 2) {
      translateY.value = withSpring(0); // Snap to the visible position
    } else {
      translateY.value = withSpring(-DROPDOWN_HEIGHT); // Snap back to hidden
    }
  };

  const showDropdown = () => {
    translateY.value = withTiming(0); // Show the dropdown with animation
  };

  const hideDropdown = () => {
    translateY.value = withTiming(DROPDOWN_HEIGHT); // Hide the dropdown with animation
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Gesture Handler to detect sliding */}
      <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
        <Animated.View style={[styles.dropdownContainer, animatedStyle]}>
          {/* <Text style={styles.text}>Notification Content</Text> */}
          <DropdownContent/>
        </Animated.View>
      </PanGestureHandler>

      {/* Trigger to show the dropdown (e.g., a button elsewhere in your app) */}
      {/* <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={showDropdown}>
          Show Notification Bar
        </Text>
      </View> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    
    // backgroundColor: '#f5f5f5',
  },
  dropdownContainer: {
    // position: 'absolute',
    top: 0 ,
    // left: 0,
    // right: 0,
    // height: DROPDOWN_HEIGHT,
    height: 0,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'visible',
    zIndex: 1000, // Ensure the dropdown is above other content
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
  },
  button: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default TopSliderSheet;
