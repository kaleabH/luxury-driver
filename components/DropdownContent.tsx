import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";
const DropdownContent = () => {
  return (
    <View style={styles.container}>
   
    
      <View style={[styles.containerGroup, styles.frameParentFlexBox]}>
        <View style={styles.container1}>
          <Image
            style={styles.containerChild}
            resizeMode="cover"
            source={require("../assets/icons/frame-1466.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>100%</Text>
          <Text style={[styles.acceptance, styles.textTypo]}>acceptance</Text>
        </View>
        <View style={styles.containerShadowBox}>
          <Image
            style={styles.containerChild}
            resizeMode="cover"
            source={require("../assets/icons/frame-14661.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5.5</Text>
          <Text style={[styles.acceptance, styles.textTypo]}>ratings</Text>
        </View>
        <View style={styles.containerShadowBox}>
          <Image
            style={styles.containerChild}
            resizeMode="cover"
            source={require("../assets/icons/frame-14662.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>0.0%</Text>
          <Text
            style={[styles.acceptance, styles.textTypo]}
          >{`cancellation `}</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.parentSpaceBlock}>
          <Text style={[styles.todaysEarning, styles.walletTypo]}>
            TODAY’S EARNING
          </Text>
          <View
            style={[
              styles.containervariant91,
              styles.containervariantShadowBox,
            ]}
          >
            <Text style={[styles.birrday, styles.birrdayTypo]}> ETB 0.0</Text>
          </View>
        </View>
        <View style={[styles.walletParent, styles.parentSpaceBlock]}>
          <Text style={[styles.wallet, styles.walletTypo]}>WALLET</Text>
          <View
            style={[
              styles.containervariant92,
              styles.containervariantShadowBox,
            ]}
          >
            <Text style={[styles.birrday1, styles.birrdayTypo]}>
              {/* {" "} */}
              ETB   38.39
            </Text>
          </View>
        </View>
      </View>
      </View>
  )
}

export default DropdownContent

const styles = StyleSheet.create({
    drawerIconLayout: {
      height: 49,
      width: 49,
      left: 364,
      position: "absolute",
    },
    groupChildPosition: {
      height: 60,
      top: 0,
      position: "absolute",
    },
    search1Typo: {
      fontFamily: FontFamily.interLight,
      fontWeight: "300",
    },
    search1Position: {
      top: 13,
      position: "absolute",
    },
    windows12TracedLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    drawerMenuIcon2Position: {
      top: 31,
      position: "absolute",
    },
    sosTypo: {
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
      textAlign: "left",
      position: "absolute",
    },
    frameParentFlexBox: {
      // paddingVertical: Padding.p_sm,
      // paddingHorizontal: Padding.p_mini,
      backgroundColor: Color.colorWhitesmoke,
      // backgroundColor: 'green',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // position: "absolute",
    },
    textTypo: {
      marginTop: 7,
      color: Color.colorBlack,
      fontSize: FontSize.size_2xs_3,
      textAlign: "left",
    },
    walletTypo: {
      color: Color.colorDarkslategray,
      fontFamily: FontFamily.interSemiBold,
      fontWeight: "600",
      fontSize: FontSize.size_lg_8,
    },
    containervariantShadowBox: {
      marginTop: 10,
      // paddingVertical: 5,
      backgroundColor: Color.colorFirebrick,
      borderRadius: 5,
      elevation: 2.31,
      shadowRadius: 2.31,
      height: 28,
      // paddingHorizontal: 23,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      overflow: "hidden",
    },
    birrdayTypo: {
      fontFamily: FontFamily.pTSerifCaption,
      fontSize: FontSize.size_base_5,
      color: Color.colorWhite,
    },
    parentSpaceBlock: {
      padding: Padding.p_3xs,
      justifyContent: "center",
      overflow: "hidden",
    },
    drawerPosition: {
      left: 6,
      height: 49,
      width: 49,
      position: "absolute",
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
    },
    drawerMenuIcon: {
      
      width: 83,
      height: 83,
      position: "absolute",
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
      display: "none",
      overflow: "hidden",
    },
    search: {
      borderColor: Color.colorDarkgray,
      borderWidth: 1,
      height: 57,
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      top: 3,
      width: 329,
      borderRadius: 11,
      shadowOpacity: 1,
      elevation: 5.61,
      shadowRadius: 5.61,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      left: 0,
      position: "absolute",
      overflow: "hidden",
    },
    groupChild: {
      left: 5,
      width: 69,
      height: 60,
      top: 0,
    },
    searchParent: {
      width: 329,
      height: 60,
      top: 0,
      display: "none",
      left: 0,
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
      width: 57,
      height: 57,
      top: 3,
      display: "none",
      position: "absolute",
    },
    groupParent: {
      width: 0,
      height: 0,
      marginTop: 25,
    },
    container: {
      // top: -344,

      // left: 2,
      backgroundColor: 'yellow',
      flex: 1,
      flexDirection: 'column',
      // backgroundColor: Color.colorGray_200,
      // width: 425,
      // height: 664,
      width: '100%',
      // height: "100%",
      height: "40%",
      justifyContent: "center",
      // paddingHorizontal: Padding.p_3xs,
      // paddingVertical: Padding.p_8xs,
      alignItems: "center",
      borderRadius: 11,
      shadowOpacity: 1,
      elevation: 5.61,
      shadowRadius: 5.61,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      // position: "absolute",
      overflow: "hidden",
    },
    drawerMenuIcon2: {
      left: 341,
      width: 53,
      height: 53,
    },
    arrivedAtPick: {
      fontSize: FontSize.size_7xs_5,
      color: Color.colorMaroon_200,
      width: 54,
      textAlign: "center",
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
      display: "none",
    },
    arrivedAtPickUpWrapper: {
      borderRadius: 9,
      width: 110,
      height: 16,
      paddingVertical: 4,
      paddingHorizontal: 23,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: Color.colorWhite,
      alignItems: "center",
      overflow: "hidden",
    },
    containerbottomcontainer: {
      left: 3,
      shadowRadius: 1.65,
      elevation: 1.65,
      borderRadius: 21,
      borderColor: Color.colorSilver,
      borderWidth: 5,
      width: 140,
      height: 45,
      justifyContent: "space-between",
      paddingHorizontal: 6,
      paddingVertical: 1,
      flexDirection: "row",
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      top: 3,
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
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
      left: 25,
      color: Color.colorMaroon_100,
    },
    containerbottomcontainerParent: {
      width: 146,
      height: 51,
      left: 0,
    },
    containerChild: {
      width: 30,
      height: 27,
      overflow: "hidden",
    },
    text: {
      fontWeight: "700",
      fontFamily: FontFamily.interBold,
    },
    acceptance: {
      fontFamily: FontFamily.interLight,
      fontWeight: "300",
    },
    container1: {
      paddingBottom: Padding.p_mini_2,
      paddingTop: 11,
      paddingHorizontal: Padding.p_mini_2,
      height: 114,
      width: 91,
      borderRadius: 1,
      elevation: 3.92,
      shadowRadius: 3.92,
      justifyContent: "center",
      backgroundColor: Color.colorWhite,
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      overflow: "hidden",
    },
    containerShadowBox: {
      marginLeft: 15,
      paddingBottom: Padding.p_mini_2,
      paddingTop: 11,
      paddingHorizontal: Padding.p_mini_2,
      height: 114,
      width: 91,
      borderRadius: 1,
      elevation: 3.92,
      shadowRadius: 3.92,
      justifyContent: "center",
      backgroundColor: Color.colorWhite,
      alignItems: "center",
      shadowOpacity: 1,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      overflow: "hidden",
    },
    containerGroup: {
      // top: 70,
      // left: 39,
      width: '100%',
      height: '100%'
    },
    todaysEarning: {
      textAlign: "left",
    },
    birrday: {
      color: Color.colorWhite,
      textAlign: "left",
    },
    containervariant91: {
      width: 96,
    },
    wallet: {
      textAlign: "right",
    },
    birrday1: {
      color: Color.colorWhite,
      textAlign: "left",
    },
    containervariant92: {
      width: 111,
    },
    walletParent: {
      marginLeft: 25,
    },
    frameParent: {
      // top: 217,
      // left: 43,
      // width: 336,
      // height: 82,
      width: '100%',
      height: '100%'
    },
    drawerMenuIcon3: {
      top: 640,
    },
    drawerMenuIcon4: {
      top: 568,
    },
    drawerMenuIcon5: {
      top: 512,
    },
    drawerMenuChild: {
      height: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      width: "100%",
    },
    sos: {
      top: "30.61%",
      left: "16.33%",
      color: Color.colorWhite,
    },
    drawerMenu: {
      top: 592,
      shadowOpacity: 1,
      elevation: 5.61,
      shadowRadius: 5.61,
      shadowOffset: {
        width: 5.60899543762207,
        height: 4.487196445465088,
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      left: 6,
    },
    driverhomeScreenIcon: {
      flex: 1,
      height: 926,
      overflow: "hidden",
      width: "100%",
    },
  });