import React, {ReactNode, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FAB, Portal, PaperProvider, Button, Icon as PIcon, Modal} from 'react-native-paper';
import Icon from './Icon'
import theme from '../theme';
import { useNavigation } from '@react-navigation/native';
import CreateTrip from './CreateTrip';
import TouchableIcon from './TouchableIcon';


interface WidgetsProps{
    children?: ReactNode
}


const Widgets: React.FC<WidgetsProps> = (props) => {
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
            <View style={[ styles.sideWidgets, {paddingTop: 100}]}>

                <TouchableIcon 
                  source={require('../assets/icons/target_red.png')}
                  onPress={showModal}
                  size={32}/>

                <TouchableIcon 
                style={styles.icon}source={require('../assets/icons/sos_red.png')}
                size={32}/>
            </View>

       <View style={[styles.sideWidgets,{paddingTop: 350}]}>
                
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
                style:styles.fabItems,
                
                // label: 'Star',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed star'),
            },
            {
                icon: 'email',
                style:styles.fabItems,
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed email'),
            },
            {
                icon: 'bell',
                style:styles.fabItems,
                color:theme.color.textColor,
            // label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
            {
                icon: 'email',
                style:styles.fabItems,
                // label: 'Email',
                color:theme.color.textColor,
                onPress: () => console.log('Pressed email'),
            },
            {
                icon: 'bell',
                style:styles.fabItems,
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
    <View style={styles.screenContainer}>
    {
        props.children
        }
    </View>
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
        flex:1,
        opacity: 0.9,
        flexDirection:'row',
        width:'100%',
        justifyContent:"center",
        alignItems:"flex-end",
        alignSelf: 'center',
        zIndex:-1000

        // backgroundColor:'green'
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
    sideWidgets:{
        paddingHorizontal:10,
         height: '100%',
         alignSelf: 'center',
         alignItems: "baseline",
         justifyContent: "center",
         zIndex: -1000,
         flexDirection: "column"
    },
    fab:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        transform:[{scale:1.3}],
        width: 48,
        height: 48,
        borderRadius: 48,
        // zIndex: -1000,
    },
    icon:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 6.59,
        shadowRadius: 6.59,
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