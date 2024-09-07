import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, View, Alert } from 'react-native'
import React,{useState, useEffect} from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import withWidgets from '../../components/withWidgets';
import TopSliderSheet from '../../components/TopSliderSheet';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamsList } from '../../navigations/DrawerNavigator';
import {Icon as PIcon} from 'react-native-paper'
import TouchableIcon from '../../components/TouchableIcon';
import theme from '../../theme';
import RideRequest from '../../components/RideRequest';
export interface ILatLng {
    latitude: number;
    longitude: number;
}
export interface HomeScreenParams{

}
interface HomeScreenProps extends DrawerScreenProps<DrawerParamsList,'Home'> {
    latLng: ILatLng;
    setLatLng: React.Dispatch<React.SetStateAction<ILatLng>>;
    onCenterMap(mapRef: MapView| null, latLng: ILatLng): void;
    mapRef: MapView | null;
    setMapRef: React.Dispatch<React.SetStateAction<MapView|null>>    // [key:string]: any
}

const { width, height } = Dimensions.get("window");

const Home: React.FC< HomeScreenProps> = (props) => {
    // const {latLng, setLatLng, onCenterMap} = props;
    const[isMapReady, setIsMapReady] = useState(false)
    // let {mapRef} = props;


    const [phase, setPhase] = useState<number>(1);
    const [startLocation, setStartLocation] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [locations, setLocations] = useState<string[]>([]);
    // const navigation = useNavigation();

    const [latLng, setLatLng] = useState<ILatLng>({
        latitude: 8.9831,
        longitude: 38.8101,
      });

      let mapRef: MapView | null = null;
      useEffect(() => {
        navigator.geolocation?.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setLatLng({ latitude, longitude });
          },
          () => {
            Alert.alert('Error', 'Failed to get your current location');
          },
          {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000,
          },
        );
      }, []);
    



    const handleAddStop = () => {
        setLocations([...locations, '']);
    };
    function centerMap() {
        mapRef?.animateToRegion(
          {
            ...latLng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          1000,
        );
      };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{
                width: '96%',
                height: 200,
                borderRadius: 20,
                backgroundColor: 'white',
                position: 'absolute',
                top: '13%',
                alignSelf: 'center',
                zIndex: 5
            }}>
            <RideRequest/>
            </View>
            {/* <View style={styles.sliderContainer}>
        <TopSliderSheet/>
            </View> */}

    <MapView
            ref={map => {
                mapRef = map;
              }}
                style={styles.map}
                onMapReady={()=>{
                    console.log('map is ready')
                    setIsMapReady(true)
                }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 8.9831,
                    longitude: 38.8101,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {
                    isMapReady && <Marker  coordinate={latLng}  >
                    <Image style={{transform: [{scale: 0.25},{rotateY: '19deg'}]}} source={require('../../assets/icons/marker.png')}/>
                    </Marker>
    
                }
            </MapView>
            <View style={styles.rightWidgets}>

                <TouchableIcon onPress={centerMap}>
                <PIcon
                source="crosshairs-gps"
                color={theme.color.textColor}
                size={25}/>
                </TouchableIcon>
            </View>
            
</KeyboardAvoidingView>
)
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection:'row',
    // width,height,
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: 'green'
},
sliderContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'green',
    height: '30%',
    top: 120,
    // overflow:'visible',
    // alignSelf: 'center',
    zIndex: 3
},
rightWidgets:{
    //  overflow:'visible',
    //  position: 'absolute',
    //  alignSelf: 'center',
    top: '65%',
    left: '90%',
    //  alignItems: "baseline",
    //  justifyContent: "space-between",
     backgroundColor: 'purple',
     width: 0,
     position: 'absolute', 
     overflow: 'visible',
     zIndex: 3,
    // //  zIndex: -1000,
    //  flexDirection: "column"
},
map: {
    flex: 1,
    // marginTop:150
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    borderColor: 'blue',
    borderWidth : 3
    // width,height

},
})

export default withWidgets(Home)