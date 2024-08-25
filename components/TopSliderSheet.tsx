
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'


// const {height: SCREEN_HEIGHT } = Dimensions.get('window')
 const SCREEN_HEIGHT = 200;
// console.log('the windows dimensions', Dimensions.get('window'))
const MAX_TRANSLATE_Y = SCREEN_HEIGHT 
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 2

const TopSliderSheet = () => {
        const translateY = useSharedValue(0)
        const context = useSharedValue({y: 0})
    
        const gesture = Gesture.Pan()
        .onStart(e => {
            context.value = {y: translateY.value}
        })
        .onUpdate(e => {
            translateY.value = e.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y)
        })
        .onEnd(e => {
            if(translateY.value > -MIN_TRANSLATE_Y){
                translateY.value = withSpring(SCREEN_HEIGHT)
            }
            if(translateY.value < -MIN_TRANSLATE_Y){
                translateY.value = withSpring(-MAX_TRANSLATE_Y)
            }
        })
    
        /**
         * Animated style for the bottom sheet
         */
        const reanimatedBottomStyle = useAnimatedStyle( () => {
            return {
                transform: [ {translateY: translateY.value} ]
            }
        })
        
        /**
         * Scrolls to a specific destination
         * @param {number} destination - The destination to scroll to
         */
        const scrollTo = ( destination: number ) => {
            'worklet'
            translateY.value = withSpring(destination, {damping: 50})
        }
    
        useEffect(() => {
            // Initial scroll to show the bottom sheet partially
            scrollTo(SCREEN_HEIGHT / 3)
        }, [])
          
      return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomsheet_container, reanimatedBottomStyle]}>
                <View style={styles.childrenContainer}>
                <Text>Bottomsheet</Text>
                </View>
                <View style={styles.line} />
            </Animated.View>
        </GestureDetector>
      )
    }

    const styles = StyleSheet.create({
        bottomsheet_container: {
            width: '100%',
            height: SCREEN_HEIGHT,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'space-between',
            backgroundColor: "#ffffff",
            opacity:0.5,
            position: 'absolute',
            // top: 20,
            top: SCREEN_HEIGHT / 0.75,
            zIndex: 12000,
            borderRadius: 25,
            paddingHorizontal: 10,
        },
        line: {
            width: 95,
            height: 5,
            backgroundColor: 'grey',
            // opacity:0,
            borderRadius: 20,
            alignSelf: 'center',
            marginVertical: 10,
        },
        childrenContainer:{
            // flex: 1,
            width:'100%',
            borderColor:'red',
            borderWidth:3,
            justifyContent:'center',
            alignItems: 'center'
        }
    })

export default TopSliderSheet;