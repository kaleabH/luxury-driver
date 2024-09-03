import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import withWidgets from '../../components/withWidgets';
import TopSliderSheet from '../../components/TopSliderSheet';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamsList } from '../../navigations/DrawerNavigator';
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


    function centerMap() {
        mapRef?.animateToRegion(
          {
            ...latLng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          1000,
        );
      }

    let mapRef: MapView | null = null;
    const [latLng, setLatLng] = useState<ILatLng>({
        latitude: 8.9831,
        longitude: 38.8101,
    });
    return (
        <KeyboardAvoidingView style={styles.container}>
        <TopSliderSheet/>
    <MapView
            ref={mapRef}
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
map: {
    flex: 1,
    // marginTop:150
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    // width,height

},
})

export default withWidgets(Home)