import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import AcceptSlider from '../AcceptSlider';


const RideRequest = () => {
  return (
    <View>
    <View style={[styles.passengerInfo, styles.passengerInfoSpaceBlock]}>
        <View style={[styles.drawerMenuWrapper, styles.containerFlexBox]}>
          <Image
            style={styles.drawerMenuIcon2}
            resizeMode="cover"
            source={require("../../assets/icons/drawer-menu11.png")}
          />
        </View>
        <View style={[styles.abelTesfayeParent, styles.containerFlexBox]}>
          <Text style={[styles.abelTesfaye, styles.onlineTypo]}>
            Abel Tesfaye
          </Text>
          <Text style={[styles.vvip, styles.vvipTypo]}>VVIP</Text>
        </View>
        <View style={[styles.drawerMenuParent, styles.passengerInfoSpaceBlock]}>
          <Image
            style={styles.drawerIconLayout}
            resizeMode="cover"
            source={require("../../assets/icons/drawer-menu12.png")}
          />
          <Image
            style={[styles.drawerMenuIcon4, styles.drawerIconLayout]}
            resizeMode="cover"
            source={require("../../assets/icons/drawer-menu13.png")}
          />
        </View>
      </View>
      {/* arrived at slider start */}
      <AcceptSlider/>
      {/* arrived at slider end */}
    </View>
  )
}


export default RideRequest


const styles = StyleSheet.create({
    drawerIconLayout1: {
      height: 49,
      width: 49,
      position: "absolute",
    },
    drawerMenuParentSpaceBlock: {
      paddingHorizontal: Padding.p_3xs,
      overflow: "hidden",
    },
    groupChildPosition: {
      height: 60,
      top: 0,
      position: "absolute",
    },
    searchBorder: {
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      position: "absolute",
      overflow: "hidden",
    },
    containerLayout: {
      width: 57,
      height: 57,
      position: "absolute",
    },
    containerFlexBox: {
      justifyContent: "center",
      alignItems: "center",
    },
    windows12TracedLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    drawerMenuIconPosition: {
      top: 31,
      position: "absolute",
    },
    passengerInfoFlexBox: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
    },
    arrivedFlexBox: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    arrivedTypo: {
      textAlign: "center",
      color: Color.colorMaroon_200,
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
    },
    onlineTypo: {
      fontSize: FontSize.size_base,
      textAlign: "left",
    },
    drawerMenuLayout: {
      height: 82,
    //   position: "absolute",
    },
    arrivedAtPickUpContainerLayout: {
      borderRadius: Border.br_11xl,
      backgroundColor: Color.colorWhite,
      position: "absolute",
    },
    passengerInfoSpaceBlock: {
      paddingVertical: 0,
      backgroundColor: Color.colorWhite,
    },
    vvipTypo: {
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
    },
    drawerIconLayout: {
      height: 41,
      alignSelf: "stretch",
      maxWidth: "100%",
      overflow: "hidden",
      width: "100%",
    },
    driverhomeScreenChild: {
      top: -182,
      width: 428,
      height: 428,
      display: "none",
      left: 0,
      position: "absolute",
    },
    ferr2Icon: {
      top: 28,
      left: 101,
      width: 226,
      height: 435,
      display: "none",
      position: "absolute",
    },
    drawerMenuvariant5Icon: {
      top: 712,
      left: 367,
    },
    containervariant9Child: {
      borderRadius: Border.br_8xs,
      backgroundColor: Color.colorGainsboro,
      width: 200,
      height: 10,
    },
    circumsearchIcon: {
      top: 7,
      left: 7,
      width: 44,
      height: 44,
      display: "none",
      position: "absolute",
      overflow: "hidden",
    },
    search1: {
      left: 74,
      fontSize: FontSize.size_5xl,
      lineHeight: 29,
      fontWeight: "300",
      fontFamily: FontFamily.interLight,
      color: Color.colorDarkgray,
      textAlign: "left",
      top: 13,
      position: "absolute",
    },
    rivetIconsfilter: {
      left: 344,
      borderRadius: Border.br_7xs,
      width: 29,
      height: 29,
      top: 13,
      display: "none",
      position: "absolute",
      overflow: "hidden",
    },
    search: {
      borderColor: Color.colorDarkgray,
      borderWidth: 1,
      height: 57,
      top: 3,
      width: 329,
      left: 0,
      borderRadius: 11,
      elevation: 5.61,
      shadowRadius: 5.61,
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      borderStyle: "solid",
    },
    groupChild: {
      left: 5,
      width: 69,
    },
    searchParent: {
      width: 329,
      left: 0,
      display: "none",
    },
    container: {
      width: 57,
      height: 57,
      position: "absolute",
      backgroundColor: Color.colorWhite,
      top: 0,
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      left: 0,
      borderRadius: 11,
      elevation: 5.61,
      shadowRadius: 5.61,
    },
    windows12Traced: {
      height: "50.88%",
      width: "50.88%",
      top: "26.32%",
      right: "24.56%",
      bottom: "22.81%",
      left: "24.56%",
    },
    containerParent: {
      left: 331,
      top: 3,
      display: "none",
    },
    groupParent: {
      width: 0,
      height: 0,
      marginTop: 25,
    },
    containervariant9: {
      top: -48,
      left: 2,
      backgroundColor: Color.colorGray_200,
      width: 425,
      height: 352,
      justifyContent: "flex-end",
      paddingVertical: Padding.p_8xs,
      alignItems: "center",
      paddingHorizontal: Padding.p_3xs,
      borderRadius: 11,
      shadowOpacity: 1,
      elevation: 5.61,
      shadowRadius: 5.61,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      position: "absolute",
    },
    arrivedAtPick: {
      fontSize: FontSize.size_7xs_5,
      width: 54,
      display: "none",
    },
    arrivedAtPickUpWrapper: {
      borderRadius: 9,
      width: 110,
      height: 16,
      paddingHorizontal: 23,
      paddingVertical: 4,
      backgroundColor: Color.colorWhite,
      overflow: "hidden",
    },
    containerbottomcontainer: {
      shadowRadius: 1.65,
      elevation: 1.65,
      borderRadius: 21,
      borderColor: Color.colorSilver,
      borderWidth: 5,
      width: 140,
      height: 45,
      paddingHorizontal: 6,
      paddingVertical: 1,
      left: 3,
      top: 3,
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      position: "absolute",
      overflow: "hidden",
    },
    instanceChild: {
      top: 12,
      left: 105,
      width: 28,
      height: 28,
      position: "absolute",
    },
    online: {
      top: 16,
      color: Color.colorMaroon_100,
      left: 25,
      position: "absolute",
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
    },
    containerbottomcontainerParent: {
      width: 146,
      height: 51,
      left: 0,
    },
    drawerMenuIcon: {
      left: 341,
      width: 53,
      height: 53,
    },
    arrivedAtPick1: {
      fontSize: FontSize.size_lg_8,
      width: 183,
    },
    arrivedAtPickUpContainer: {
      width: 405,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      left: 3,
      top: 3,
      height: 57,
    },
    containerbottomcontainer1: {
      top: 10,
      height: 63,
    //   width: 411,
      width: '100%',
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      elevation: 5.61,
      shadowRadius: 5.61,
      borderRadius: Border.br_11xl,
      left: 0,
      overflow: "hidden",
    },
    drawerMenuIcon1: {
      top: 17,
      left: 347,
    },
    drawerMenuChild: {
      height: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      width: "100%",
    },
    vectorIcon: {
      width: 15,
      height: 26,
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
    containerbottomcontainerGroup: {
    //   width: 411,
    width: '100%'
    },
    drawerMenuIcon2: {
      width: 58,
      height: 56,
    },
    drawerMenuWrapper: {
      width: 98,
    },
    abelTesfaye: {
      fontFamily: FontFamily.interRegular,
      color: Color.colorBlack,
    },
    vvip: {
      fontSize: FontSize.size_mini,
      textAlign: "right",
      marginTop: 10,
      color: Color.colorBlack,
    },
    abelTesfayeParent: {
      paddingHorizontal: 0,
      paddingVertical: Padding.p_3xs,
      backgroundColor: Color.colorWhite,
      overflow: "hidden",
    },
    drawerMenuIcon4: {
      marginTop: 8,
    },
    drawerMenuParent: {
      width: 61,
      paddingHorizontal: Padding.p_3xs,
      overflow: "hidden",
    },
    passengerInfo: {
    //   top: 99,
    //   width: 379,
    width: "100%",
      height: 100,
    //   paddingHorizontal: 13,
    //   left: 25,
    //   position: "absolute",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      borderRadius: 11,
      elevation: 5.61,
      shadowRadius: 5.61,
    },
    driverhomeScreenIcon: {
      flex: 1,
      height: 926,
      overflow: "hidden",
      width: "100%",
    },
  });