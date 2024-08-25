import React, {ReactNode, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FAB, Portal, PaperProvider, Button, Icon as PIcon} from 'react-native-paper';
import Icon from './Icon'
import theme from '../theme';
import { useNavigation } from '@react-navigation/native';


interface WidgetsProps{
    children?: ReactNode
}


const Widgets: React.FC<WidgetsProps> = (props) => {
    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }: {open: boolean}) => setState({ open });
    const navigator = useNavigation();
  
    const { open } = state;

  return (
    <PaperProvider>

        

    <Portal>
        <View style={styles.container}>
            <View style={[ styles.sideWidgets, {paddingTop: 100}]}>
                <TouchableOpacity style={styles.icon}>
                <Icon
    source={require('../assets/icons/target_red.png')}
    size={32}
  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                <Icon
                 
    source={require('../assets/icons/sos_red.png')}
    size={32}
  />
                </TouchableOpacity>
        
            </View>

       <View style={[styles.sideWidgets,{paddingTop: 350}]}>
                
                {/* <TouchableOpacity onPress={()=>{navigator.navigate()}} style={[styles.icon, {position: 'absolute', top:30, right: 20}]}>
                <PIcon
    source={require('../assets/icons/avatar.png')}
    size={32}
  />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.icon}>
                <PIcon
    source={require('../assets/icons/location_red.png')}
    size={32}
  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                <PIcon
    source="traffic-light"
    color={theme.color.textColor}
    size={32}
  />
                </TouchableOpacity>
             
                <TouchableOpacity style={[styles.icon, {}]}>
                <PIcon
    source="crosshairs-gps"
    color={theme.color.textColor}
    size={25}
  />
                </TouchableOpacity>
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

        // backgroundColor:'green'
    },
    fabContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:"center",
        alignItems:"flex-end",
        alignSelf: 'center'

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
    }
})

export default Widgets