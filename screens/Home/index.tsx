import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import withWidgets from '../../components/withWidgets';
import TopSliderSheet from '../../components/TopSliderSheet';
interface ILatLng {
    latitude: number;
    longitude: number;
}

const Home = () => {
    let mapRef: MapView | null = null;
    const [latLng, setLatLng] = useState<ILatLng>({
        latitude: 8.9831,
        longitude: 38.8101,
    });
    return (
        <View style={styles.container}>
        <TopSliderSheet/>
    <MapView
            ref={map => {
                mapRef = map;
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
                <Marker coordinate={latLng} />
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
    alignItems: 'center'
},
map: {
    // flex: 8,
    // marginTop:150
    width: "100%",
    height: "100%",
},
})

export default withWidgets(Home)