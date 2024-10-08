import React, {ReactNode, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { FAB, Portal, PaperProvider, Button, Icon as PIcon, Modal} from 'react-native-paper';
import Icon from './Icon'
import theme from '../theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CreateTrip from './CreateTrip';
import TouchableIcon from './TouchableIcon';
import MapView from 'react-native-maps';
import { DrawerParamsList } from '../navigations/DrawerNavigator';

interface ILatLng {
  latitude: number;
  longitude: number;
}


export interface ChildrenParams{
  handleCenterMap(mapRef: MapView| null, latLng: ILatLng): void;
  latLng: ILatLng;
  setLatLng: React.Dispatch<React.SetStateAction<ILatLng>>;
  // mapRef:React.RefObject<MapView | null>,
  mapRef:React.ForwardedRef<MapView | null>,
  // setMapRef: React.Dispatch<React.SetStateAction<MapView|null>>
}


interface WidgetsProps{
    children(Props:ChildrenParams): ReactNode
}


const { width, height } = Dimensions.get("window");
const Widgets: React.FC<WidgetsProps> = (props) => {
  let mapRef: MapView | null = null;
  // const [mapRef, setMapRef] =useState<MapView| null>(null);
  // const mapRef = React.createRef<MapView|null>()

  const ChildrenProp =   React.forwardRef((props: WidgetsProps, mapRef: React.ForwardedRef<MapView | null>)=>{
    return  props.children({handleCenterMap: centerMap, latLng, setLatLng, mapRef})
  })

  const [latLng, setLatLng] = useState<ILatLng>({
        latitude: 8.9831,
        longitude: 38.8101,
    });
  function centerMap(mapRef: MapView|null, latLng : ILatLng): void {
    mapRef?.animateToRegion(
      {
        ...latLng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000,
    );
  }
 
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }: {open: boolean}) => setState({ open });
    const navigator = useNavigation<NavigationProp<DrawerParamsList>>();
  
    const { open } = state;

  return (
    <PaperProvider>

    <Portal>
    <Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
          <CreateTrip closeModal={hideModal}/>
                </Modal>
    </Portal>

        <View style={styles.container}>
                <View style={styles.screenContainer}>
                {/* <ChildrenProp {...props} ref={mapRef}/> */}
                {
                  props.children({handleCenterMap: centerMap, latLng, setLatLng, mapRef})
                
                }
                </View>
                <View style={[ styles.leftWidgets]}>

<TouchableIcon 
  source={require('../assets/icons/plus_red.png')}
  onPress={showModal}
  size={32}/>

<TouchableIcon 
style={styles.icon}source={require('../assets/icons/sos_red.png')}
size={32}/>
                </View>
                <View style={[styles.rightWidgets]}>
                
                <TouchableIcon>
                <PIcon 
                source={require('../assets/icons/location_red.png')} 
                size={32}
                />
                </TouchableIcon>

                <TouchableIcon>
                <PIcon 
                source="traffic-light" 
                color={theme.color.textColor}
                size={32}/>
                </TouchableIcon>
             
                {/* <TouchableIcon>
                <PIcon
                source="crosshairs-gps"
                color={theme.color.textColor}
                size={25}/>
                </TouchableIcon> */}

                </View>
                 <FAB.Group
                   open={open}
                   style={styles.fabContainer}
                   fabStyle={styles.fab}
                   visible
                   color={theme.color.textColor}
        
        
                   icon={open ? 'close' : 'menu'}
                   actions={[
            //   { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
                icon: 'star',
                style:[styles.fabItems, {transform: [{translateX: 70},{translateY: 220}]}],
                
                // label: 'Star',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed star'),
            },
            {
                icon: 'wallet',
                style:[styles.fabItems, {transform: [{translateX:80},{translateY: 220}]}],
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => {navigator.navigate('Wallet')},
            },
            {
                icon: 'home',
                style: [styles.fabItems, {transform: [{translateY:70}]}],
                color:theme.color.textColor,
            // label: 'Remind',
            onPress: () => {navigator.navigate('Home',{})},
          },
            {
                icon: 'history',
                style:[styles.fabItems, {transform: [{translateX: -70}, {translateY:30}]}],
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => {navigator.navigate('RideHistory')},
            },
            {
                icon: 'bell',
                style:[styles.fabItems, {transform: [{translateX: -80}, {translateY:30}]}],
                color:theme.color.textColor,
            // label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
                   }}
                 />
         </View>
    
  </PaperProvider>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        position: 'absolute',
        zIndex: 2,
        // transform: [{scale: 0.5}],
        width:'100%',
        height: '100%',
        // transform: [{scale: 0.5}]
        // justifyContent:"space-between",
        // alignItems:"flex-end",
        // zIndex:-1000
        // backgroundColor:'green'
      },
      fabContainer:{
        // flex:1,
        // opacity: 0.95,

        flexDirection:'row',
        // width:'100%',
        justifyContent:"center",
        alignItems:"flex-end",
        alignSelf: 'center',
        zIndex: 3
        // backgroundColor: 'green',
        // zIndex:-1000

        // backgroundColor:'green'
    },
    leftWidgets:{
      //  overflow:'visible',
      //  position: 'absolute',
      //  alignSelf: 'center',
       top: '40%',
       left: '10%',
      //  alignItems: "baseline",
      //  justifyContent: "space-between",
       backgroundColor: 'blue',
       width: 0,
       marginRight:10,
       position: 'absolute',
       zIndex: 3

      // //  padding:'0%',
      // //  zIndex: -1000,
      //  flexDirection: "column"
  },
    rightWidgets:{
      //  overflow:'visible',
      //  position: 'absolute',
      //  alignSelf: 'center',
      top: '40%',
      left: '90%',
      //  alignItems: "baseline",
      //  justifyContent: "space-between",
       backgroundColor: 'purple',
       width: 0,
       position: 'absolute', 
       zIndex: 3,
      // //  zIndex: -1000,
      //  flexDirection: "column"
  },
    bottomContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        borderColor: 'black',
        borderWidth: 2

        // backgroundColor:'green'
    },
    screenContainer:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf:'center',
        position:'absolute',
        // top:20,
        zIndex: 2

    },
   
    fab:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        transform:[{scale:1.3}, {translateY:-30}],
        width: 58,
        height: 58,
        borderRadius: 48,
        zIndex: 1
        // zIndex: -1000,
    },
    icon:{
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        elevation: 6.59,
        shadowRadius: 6.59,
        overflow:'visible',
        // transform:[{scale:1.3}],
        width: 48,
        height: 48,
        borderRadius: 48,
        marginVertical:20
    },
    fabItems:{
        
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // transform:[{translateY: 10}],
        
        width: 48,
        height: 48,
        borderRadius: 48,
    },
    modal:{
      flex: 1,
      alignSelf:'center',
      position:'absolute',
      // top:20,
      zIndex: 1,
      // zIndex:1000,
      justifyContent: 'center',
      alignItems: 'center',
    
    }
})

export default Widgets