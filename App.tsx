import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigations/StackNavigator';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_300Light,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';



export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_300Light,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StackNavigator/>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
