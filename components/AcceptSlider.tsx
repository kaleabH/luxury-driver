import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Alert, Image } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SLIDE_WIDTH = SCREEN_WIDTH * 0.9;
const SLIDER_THRESHOLD = SLIDE_WIDTH * 0.8; // Threshold to trigger unlock

const AcceptSlider = () => {
    const [sliderText, setSliderText] = useState('arrived at pick up')
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleGesture = (event: any) => {
    const translationX = event.nativeEvent.translationX;
    translateX.value = Math.max(0, Math.min(translationX, SLIDE_WIDTH - 50));
  };

  const handleGestureEnd = (event: any) => {
    if (translateX.value > SLIDER_THRESHOLD) {
      translateX.value = withSpring(SLIDE_WIDTH - 50);

      if(sliderText === 'start trip')
      Alert.alert('Already started', 'ride already started');
    else
      Alert.alert('Accepted', 'You have picked up the passenger');
      translateX.value = withSpring(0); // Reset if not far enough
      setSliderText('start trip')
    } else {
      translateX.value = withSpring(0); // Reset if not far enough
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.slideContainer}>
        <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
          <Animated.View style={[styles.slider, animatedStyle]}>
          <View style={[styles.drawerMenu, styles.drawerMenuLayout]}>
          <Image
            style={[styles.drawerMenuChild, styles.windows12TracedLayout]}
            resizeMode="cover"
            source={require("../assets/icons/ellipse-52.png")}
          />
          <View style={[styles.view, styles.arrivedFlexBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/icons/vector1.png")}
            />
          </View>
        </View>
          </Animated.View>
        </PanGestureHandler>
        <Text style={[styles.arrivedAtPick1, styles.arrivedTypo]}>
              {sliderText}
            </Text>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
arrivedTypo: {
    textAlign: "center",
    color: Color.colorMaroon_200,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
arrivedAtPick1: {
    fontSize: FontSize.size_lg_8,
    // width: 183,
    // backgroundColor:'#e1e0e0',
    width: '100%'
  },
arrivedFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  drawerMenuChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  view: {
    height: "44.88%",
    width: "44.88%",
    top: "26.59%",
    right: "28.54%",
    bottom: "28.54%",
    left: "26.59%",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 15,
    height: 26,
  },
  drawerMenu: {
    shadowRadius: 9.39,
    elevation: 9.39,
    width: 82,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5.60899543762207,
      height: 4.487196445465088,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
  },
  drawerMenuLayout: {
    height: 82,
  //   position: "absolute",
  },
  slideContainer: {
    width: '96%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e3e2e2',
    justifyContent: 'center',
    position: 'relative',
  },
  slider: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2
  },
  sliderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unlockText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
  windows12TracedLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
});

export default AcceptSlider;