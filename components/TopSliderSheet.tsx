
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import DropdownContent from './DropdownContent'


const {height: SCREEN_HEIGHT } = Dimensions.get('window')


const TopSliderSheet = () => {
        const translateY = useSharedValue(0)
    
        const gesture = Gesture.Pan()
        .onStart(e => {
            // context.value = {y: translateY.value}
            // translateY.value = -(SCREEN_HEIGHT/0.85)
            // translateY.value =  -(SCREEN_HEIGHT/1.5)
            translateY.value = e.y;
            console.log(e);
        })
        .onUpdate(e => {
            // translateY.value = e.translationY + context.value.y;
            translateY.value = e.translationY ;
            // translateY.value = (SCREEN_HEIGHT/1.5)
            console.log(e);
            // translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y)
        })
        .onEnd(e => {
            translateY.value = e.translationY ;
            
            console.log(e);
            // if(translateY.value > -MIN_TRANSLATE_Y){
                // translateY.value = withSpring(SCREEN_HEIGHT)
            // }
            // if(translateY.value < -MIN_TRANSLATE_Y){
                // translateY.value = withSpring(-MAX_TRANSLATE_Y)
            // }
        })
    
        /**
         * Animated style for the bottom sheet
         */
        const reanimatedBottomStyle = useAnimatedStyle( () => {
            return {
                transform: [ {translateY: translateY.value} ]
            }
        })
        
        // /**
        //  * Scrolls to a specific destination
        //  * @param {number} destination - The destination to scroll to
        //  */
        // const scrollTo = ( destination: number ) => {
        //     'worklet'
        //     // translateY.value = withSpring(destination,{damping: 50})
        //     translateY.value = withSpring(destination)
        // }
    
        // useEffect(() => {
        //     // Initial scroll to show the bottom sheet partially
        //     scrollTo(SCREEN_HEIGHT / 3)
        // }, [])
          
      return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomsheet_container, reanimatedBottomStyle]}>
                {/* <View style={styles.childrenContainer}>
                <Text>Bottomsheet</Text>
                </View> */}
                    <DropdownContent/>
                <View style={styles.line} />
            </Animated.View>
        </GestureDetector>
      )
    }

    const styles = StyleSheet.create({
        bottomsheet_container: {
            width: '96%',
            height: SCREEN_HEIGHT,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'flex-end',
            backgroundColor: "#ffffff",
            // opacity:0.75,
            position: 'absolute',
            // top: -(SCREEN_HEIGHT/0.85),
            // top: translate
            // top: -200,
            top: -SCREEN_HEIGHT / 1.75,
            zIndex: 3,
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