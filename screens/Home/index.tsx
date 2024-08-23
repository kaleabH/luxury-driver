import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView} from 'react-native'
import withWidgets from '../../components/withWidgets';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, TextInput, IconButton } from 'react-native-paper';
import whereCar from '../../assets/icons/whereCar.png';
import services from '../../assets/icons/services.png';
import iconCenter from '../../assets/icons/map_center.png';
// import MapButton from '../../components/MapButton';
// import RideHistoryCard from '../../components/RideHistoryCard';


interface homeScreenProps {

}
interface ILatLng {
  latitude: number;
  longitude: number;
}
const Home : React.FC<homeScreenProps> =() => {
  const [phase, setPhase] = useState<number>(1);
    const [startLocation, setStartLocation] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [locations, setLocations] = useState<string[]>([]);
    const navigation = useNavigation();

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
      }
  return (
    <KeyboardAvoidingView style={styles.container}>

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
              
    {/* <BurgerMenu /> */}
    {/* <MapButton style={styles.locationIcon} icon={iconCenter} noMargin onPress={centerMap} /> */}
    <View style={[styles.panel, phase > 1 && styles.panelExpanded]}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {phase === 1 ? (
                <View style={styles.inputContainerHorizontal}>
                    <Image
                        source={whereCar}
                        style={styles.carImage}
                        />
                    <TextInput
                        placeholder="Where to..."
                        style={styles.inputHorizontal}
                        onFocus={() => setPhase(2)}
                        />
                    <TouchableOpacity
                    onPress={() => navigation.navigate('TabBarNavigator')}
                    >
                        <Image
                          source={services}
                          style={styles.servicesIcon}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.inputContainerVertical}>
                    <Card style={styles.inputCard}>
                        <TextInput
                            label="Start"
                            placeholder="Start"
                            value={startLocation}
                            onChangeText={setStartLocation}
                            style={styles.input}
                        />
                    </Card>
                    {locations.map((location, index) => (
                        <Card key={index} style={styles.inputCard}>
                            <TextInput
                                label={`Stop ${index + 1}`}
                                placeholder={`Stop ${index + 1}`}
                                value={location}
                                onChangeText={(text) => {
                                    const newLocations = [...locations];
                                    newLocations[index] = text;
                                    setLocations(newLocations);
                                }}
                                style={styles.input}
                            />
                        </Card>
                    ))}
                    <TouchableOpacity style={styles.plusIconContainer}>
                        <IconButton
                            icon="plus"
                            size={24}
                            iconColor='#B80028'
                            onPress={handleAddStop}
                            style={styles.plusIcon}
                        />
                    </TouchableOpacity>
                    <Card style={styles.inputCard}>
                        <TextInput
                            label="Destination"
                            placeholder="Destination"
                            value={destination}
                            onChangeText={setDestination}
                            style={styles.input}
                        />
                    </Card>
                </View>
            )}
        
                    <TouchableOpacity style={styles.carIconContainer} >
                        <IconButton
                            icon="car"
                            size={24}
                            iconColor='#B80028'
                            onPress={()=>{navigation.navigate('ListingScreen')}}
                            style={styles.plusIcon}
                        />
                    </TouchableOpacity>
            {(phase === 2 || phase === 3) && (
                <View style={styles.historyContainer}>
                    <View style={styles.historyContent}>
                        <RideHistoryCard 
                            startLocation="Bole, Addis Ababa, Ethiopia" 
                            destination="Skylight Hotel" 
                            price="2000birr" 
                            date="2024-08-01" 
                        />
                        <RideHistoryCard 
                            startLocation="Iebu, Addis Ababa, Ethiopia" 
                            destination="Hilton Hotel" 
                            price="1500birr" 
                            date="2024-07-30" 
                        />
                        <RideHistoryCard 
                            startLocation="Piyasa, Addis Ababa, Ethiopia" 
                            destination="Skylight Hotel" 
                            price="birr1800" 
                            date="2024-07-28" 
                        />
                    </View>
                </View>
            )}
        </ScrollView>
    </View>
</KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    // flex: 8,
    // marginTop:150
    width: "100%",
    height: "100%",
},
panel: {
    position:"absolute",
    // flex: 2, // Adjusted to allow growth
    // margin: 10,
    // padding: 10,
    backgroundColor: 'white',
    // marginTop:100,
    bottom:5,
    height:90,
    width:"90%",
    borderRadius: 10,
    elevation: 3,
    zIndex:2
},
panelExpanded: {
    // flex: 8, // Increase the height when expanded
    height: 400
},
scrollViewContent: {
    flexGrow: 1,
},
inputContainerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor:"#f0f0f0",
    borderWidth:2,
    borderRadius: 10,
    padding: 10,
},
inputContainerVertical: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted to align items at the top
    padding: 20,
    position: 'relative',
},
carImage: {
    width: 36,
    height: 34,
    marginRight: 10,
    // backgroundColor:'black'
},
servicesIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    // backgroundColor:'black'
},
inputHorizontal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color:'#B80028',
    borderRadius: 10,
    marginRight: 10,
},
input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
},
inputCard: {
    width: '100%',
    marginBottom: 5,
    borderRadius: 10,
    elevation: 3,
    padding: 5,
},
servicesButton: {
    marginLeft: 10,
},
plusIconContainer: {
    position: 'absolute',
    right: 0,
    top: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 5,
},
carIconContainer: {
    position: 'absolute',
    alignSelf:'center',
    // right: 10,
    top: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    // padding: 5,
},
plusIcon: {
    margin: 0,
},
historyContainer: {
    flex: 1,
    padding: 10,
},
historyContent: {
    flexGrow: 1,
    justifyContent: 'center',
},
locationIcon:{
    // position: "absolute",
    // zIndex:1,
    // bottom: 180
    // alignSelf:"center"
    // flexDirection: "row",
    // justifyContent: "space-between",
    // // bottom: 110,
    // // width: "80%",
    // height: 50,
}
});

export default withWidgets(Home)