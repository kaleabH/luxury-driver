import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
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
    const {latLng, setLatLng, onCenterMap, mapRef, setMapRef} = props;


    // function centerMap() {
    //     mapRef?.animateToRegion(
    //       {
    //         ...latLng,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       },
    //       1000,
    //     );
    //   }

    // let mapRef: MapView | null = null;
    // const [latLng, setLatLng] = useState<ILatLng>({
    //     latitude: 8.9831,
    //     longitude: 38.8101,
    // });
    return (
        <View style={styles.container}>
        {/* <TopSliderSheet/> */}
    <MapView
            ref={map => {
                setMapRef(map);
              }}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 8.9831,
                    longitude: 38.8101,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={latLng} image={require('../../assets/icons/marker.png')} />

            </MapView>
</View>
)
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection:'row',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    zIndex: 5000,
},
map: {
    // flex: 8,
    // marginTop:150
    width,
    height
},
})

export default withWidgets(Home)