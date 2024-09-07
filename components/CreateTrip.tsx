import { StyleSheet, Text, View, Image, GestureResponderEvent, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import Icon from './Icon';
import TouchableIcon from './TouchableIcon';

interface CreateTripProps{
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    closeModal (): void
}

const CreateTrip: React.FC<CreateTripProps> = ({closeModal}) => {
  return (
    <View style={[styles.driverRideBooking, styles.containerFlexBox]}>
    <View style={styles.drawerMenuWrapper}>
    <TouchableIcon
    source={require('../assets/icons/close.png')}
    size={32}
    onPress={closeModal}
  />
    </View>
    <View
      style={[styles.driverBookingForm, styles.driverBookingFormShadowBox]}
    >
      <View style={styles.searchGroup}>
        <View style={[styles.search2, styles.searchBorder]}>
      
          <TextInput style={[styles.search3, styles.search3Position]} placeholder='Start'/>
     
        </View>
        <View style={[styles.search4, styles.searchBorder]}>
     
          <TextInput style={[styles.search3, styles.search3Position]} placeholder='Destination'/>
       
        </View>
 
      </View>
      <View style={[styles.parent, styles.parentShadowBox]}>
        <Text style={[styles.text, styles.textTypo]}>+251</Text>
        {/* <TextInput/> */}
        <TextInput style={[styles.text1, styles.textTypo]} placeholder='987 65 43' />
      </View>
      <TouchableOpacity style={[styles.containervariant12, styles.parentShadowBox]}>
        <Text style={[styles.createTrip, styles.onlineTypo]}>
          CREATE TRIP
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default CreateTrip

const styles = StyleSheet.create({
    containerShadowBox: {
        borderRadius: 11,
        elevation: 5.61,
        shadowRadius: 5.61,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
      },
      groupChildPosition: {
        height: 60,
        top: 0,
        position: "absolute",
      },
      searchTypo: {
        color: Color.colorDarkgray,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        textAlign: "left",
      },
      search1Position: {
        top: 13,
        position: "absolute",
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
      drawerIconPosition: {
        top: 31,
        position: "absolute",
      },
      onlineTypo: {
        fontFamily: FontFamily.interExtraBold,
        fontWeight: "800",
      },
      onlinePosition: {
        top: 16,
        position: "absolute",
      },
      driverBookingFormShadowBox: {
        elevation: 5.59,
        shadowRadius: 5.59,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
      },
      searchBorder: {
        borderWidth: 0.9,
        borderRadius: 10,
        elevation: 4.81,
        shadowRadius: 4.81,
        borderColor: Color.colorDarkgray,
        borderStyle: "solid",
        backgroundColor: Color.colorWhite,
      },
      search3Position: {
        top: 11,
        position: "absolute",
      },
      parentShadowBox: {
        marginTop: 10,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
      },
      textTypo: {
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_3xl_4,
        top: 19,
        textAlign: "left",
        position: "absolute",
      },
      offlineScreenChild: {
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
        width: 49,
        height: 49,
        left: 341,
        position: "absolute",
      },
      drawerMenuIcon: {
        top: 800,
        left: 172,
        width: 83,
        height: 83,
        position: "absolute",
      },
      containervariant9Child: {
        borderRadius: Border.br_8xs,
        backgroundColor: Color.colorGainsboro,
        width: 200,
        height: 10,
        display: "none",
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
        borderWidth: 1,
        height: 57,
        borderColor: Color.colorDarkgray,
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
      },
      searchParent: {
        width: 329,
        height: 60,
        display: "none",
        left: 0,
      },
      container: {
        width: 57,
        height: 57,
        position: "absolute",
        backgroundColor: Color.colorWhite,
        top: 0,
        borderRadius: 11,
        elevation: 5.61,
        shadowRadius: 5.61,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        left: 0,
      },
      windows12Traced: {
        height: "50.88%",
        width: "50.88%",
        top: "26.32%",
        right: "24.56%",
        bottom: "22.81%",
        left: "24.56%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
      },
      containerParent: {
        left: 331,
        top: 3,
        width: 57,
        display: "none",
      },
      groupParent: {
        width: 0,
        height: 0,
        marginTop: 25,
      },
    //   containervariant9: {
    //     top: -17,
    //     left: 1,
    //     backgroundColor: Color.colorGray_200,
    //     width: 425,
    //     height: 943,
    //     justifyContent: "flex-end",
    //     paddingHorizontal: Padding.p_3xs,
    //     paddingVertical: Padding.p_8xs,
    //     alignItems: "center",
    //     position: "absolute",
    //     overflow: "hidden",
    //   },
      arrivedAtPick: {
        fontSize: FontSize.size_7xs_5,
        color: Color.colorMaroon_200,
        textAlign: "center",
        width: 54,
        display: "none",
      },
      arrivedAtPickUpWrapper: {
        borderRadius: 9,
        width: 110,
        height: 16,
        paddingHorizontal: 23,
        paddingVertical: 4,
        flexDirection: "row",
        backgroundColor: Color.colorWhite,
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
        left: 25,
        fontSize: FontSize.size_base,
        color: Color.colorMaroon_100,
        fontFamily: FontFamily.interExtraBold,
        fontWeight: "800",
        textAlign: "left",
      },
      containerbottomcontainerParent: {
        width: 146,
        height: 51,
        left: 0,
      },
      drawerMenuIcon1: {
        width: 43,
        height: 43,
      },
      drawerMenuWrapper: {
        paddingHorizontal: 0,
        paddingVertical: 11,
        flexDirection: "row",
        alignItems: "center",
      },
      circumsearchIcon1: {
        top: 6,
        left: 6,
        width: 38,
        height: 38,
        display: "none",
        position: "absolute",
        overflow: "hidden",
      },
      search3: {
        left: 64,
        fontSize: FontSize.size_xl_6,
        textAlign: "left",
        color: Color.darkDark2,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
      },
      rivetIconsfilter1: {
        left: 295,
        borderRadius: 5,
        width: 25,
        height: 25,
        display: "none",
        overflow: "hidden",
      },
      search2: {
        width: 333,
        left: 13,
        borderRadius: 10,
        elevation: 4.81,
        shadowRadius: 4.81,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        height: 49,
        position: "absolute",
        overflow: "hidden",
        top: 0,
      },
      search4: {
        top: 55,
        width: 333,
        left: 13,
        borderRadius: 10,
        elevation: 4.81,
        shadowRadius: 4.81,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        height: 49,
        position: "absolute",
        overflow: "hidden",
      },
      groupItem: {
        width: 12,
        height: 78,
        left: 0,
      },
      drawerMenuIcon2: {
        left: 315,
        width: 42,
        height: 42,
      },
      searchGroup: {
        width: 357,
        height: 104,
      },
      text: {
        left: 23,
        color: Color.colorBlack,
      },
      text1: {
        left: 92,
        color: Color.darkDark2,
      },
      parent: {
        width: 330,
        height: 63,
        borderWidth: 0.9,
        borderRadius: 10,
        elevation: 4.81,
        shadowRadius: 4.81,
        borderColor: Color.colorDarkgray,
        borderStyle: "solid",
        backgroundColor: Color.colorWhite,
      },
      createTrip: {
        fontSize: 19,
        color: Color.colorWhite,
        textAlign: "left",
      },
      containervariant12: {
        backgroundColor: Color.colorFirebrick,
        paddingHorizontal: 57,
        paddingVertical: 12,
        width: 333,
        elevation: 5.59,
        shadowRadius: 5.59,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
        flexDirection: "row",
        height: 57,
      },
      driverBookingForm: {
        width: 386,
        height: 289,
        padding: 10,
        marginTop: 2,
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        shadowOffset: {
          width: 5.60899543762207,
          height: 4.487196445465088,
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        elevation: 5.59,
        shadowRadius: 5.59,
      },
      driverRideBooking: {
        transform: [{scale: 0.75}],

        // top: 244,
        // left: 9,
        // width: 409,
        // height: 370,
        // paddingHorizontal: 18,
        // paddingVertical: 0,
        // position: "absolute",
        // overflow: "hidden",
      },
      drawerMenuIcon3: {
        width: 53,
        height: 53,
        left: 341,
        top: 31,
      },
      offlineScreenIcon: {
        // transform:[{scale: 0.5}],
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden",
      },
})