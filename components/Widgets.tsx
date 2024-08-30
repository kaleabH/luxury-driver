import React, {ReactNode, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FAB, Portal, PaperProvider, Button, Icon as PIcon, Modal} from 'react-native-paper';
import Icon from './Icon'
import theme from '../theme';
import { useNavigation } from '@react-navigation/native';
import CreateTrip from './CreateTrip';
import TouchableIcon from './TouchableIcon';
import MapView from 'react-native-maps';

interface ILatLng {
  latitude: number;
  longitude: number;
}


export interface ChildrenParams{
  handleCenterMap(mapRef: MapView| null, latLng: ILatLng): void;
  latLng: ILatLng;
  setLatLng: React.Dispatch<React.SetStateAction<ILatLng>>;
  mapRef:MapView|null,
  setMapRef: React.Dispatch<React.SetStateAction<MapView|null>>
}


interface WidgetsProps{
    children(Props:ChildrenParams): ReactNode
}



const Widgets: React.FC<WidgetsProps> = (props) => {
  // let mapRef: MapView | null = null;
  const [mapRef, setMapRef] =useState<MapView| null>(null);

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
    const navigator = useNavigation();
  
    const { open } = state;

  return (
    <PaperProvider>

    <Portal>
    <Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
          <CreateTrip closeModal={hideModal}/>
        </Modal>
        <View style={styles.container}>
     

            <View style={styles.screenContainer}>
    {
        props.children({handleCenterMap: centerMap, latLng, setLatLng, mapRef, setMapRef:setMapRef})
        }
    </View>
    <View>
        <View style={[ styles.leftWidgets]}>

<TouchableIcon 
  source={require('../assets/icons/target_red.png')}
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
             
                <TouchableIcon>
                <PIcon
                source="crosshairs-gps"
                color={theme.color.textColor}
                size={25}/>
                </TouchableIcon>

        </View>
    </View>
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
                icon: 'email',
                style:[styles.fabItems, {transform: [{translateX:80},{translateY: 220}]}],
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed email'),
            },
            {
                icon: 'bell',
                style: [styles.fabItems, {transform: [{translateY:70}]}],
                color:theme.color.textColor,
            // label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
            {
                icon: 'email',
                style:[styles.fabItems, {transform: [{translateX: -70}, {translateY:30}]}],
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed email'),
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
    
      
    
    </Portal>
  </PaperProvider>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-between",
        alignItems:"flex-end",
        zIndex:-1000
        
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
        // backgroundColor: 'green',
        // zIndex:-1000

        // backgroundColor:'green'
    },
    leftWidgets:{
       overflow:'visible',
       position: 'absolute',
       alignSelf: 'center',
       top: '50%',
       left: '5%',
       alignItems: "baseline",
       justifyContent: "space-between",
       backgroundColor: 'blue',
       padding:'0%',
      //  zIndex: -1000,
       flexDirection: "column"
  },
    rightWidgets:{
       overflow:'visible',
       position: 'absolute',
       alignSelf: 'center',
       top: '50%',
       left: '84%',
       alignItems: "baseline",
       justifyContent: "space-between",
       backgroundColor: 'blue',
      //  zIndex: -1000,
       flexDirection: "column"
  },
    bottomContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        borderColor: 'black',
        borderWidth: 3

        // backgroundColor:'green'
    },
    screenContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        
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
      // flex: 1,
      zIndex:1000,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default Widgets