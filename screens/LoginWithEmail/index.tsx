import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Appbar, TextInput, Button, Text, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackParamsList } from '../../navigations/StackNavigator';
import { login } from '../../services/AuthService';


type LoginWithEmailScreenProps = StackScreenProps<StackParamsList, 'LoginWithEmail'>
export type LoginWithEmailPropsList ={}
const LoginWithEmail: React.FC<LoginWithEmailScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<Array<string> | null>(null);

  const theme = {
    colors: {
      primary: '#B80028',
      background: '#FFFFFF',
      text: '#000000',
    },
  };

  const handleLogin = async  () => {
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
    const deviceInfo = `${Platform.OS} ${Platform.Version}`
    try { await login({
      email,
      password,
      deviceInfo
    });
    navigation.navigate('DrawerNavigator', {screen: 'Home'});

     }catch(e: any){
      // if(e?.response){
      if(e?.response?.status === 422){
         setErrorMessage(e.response.data.errors);
         console.log('login error', e)
      }
    // }
     }

  };

  const hasErrors = () => {
    return !email.includes('@');
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password Screen
    console.log('Forgot Password');
    // navigation.navigate('ForgotPassword'); // Adjust this if needed
  };

  useEffect(()=>{
     setEmailError(false)
  },[])

  return (
    <ScrollView style={styles.container}>
      {/* App Bar */}
      <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }}>
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <View style={styles.content}>
        {/* Email Input */}
        <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(e)=>{
             setEmail(e)}}
             onEndEditing={()=>{setEmailError(hasErrors())}}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
          />
          <HelperText type="error" visible={emailError}>
            invalid email format
          </HelperText>
        </View>

        {/* Password Input */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />
         <HelperText type="error" visible={emailError ||(errorMessage === null)}>
            {
              (emailError)? 'invalid email format' : errorMessage && (errorMessage.reduce((currentValue, array)=> currentValue+array))
            }
          </HelperText>

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <Button
          icon={() => <Icon name="login" size={20} color="#FFFFFF" />}
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
        <View style={styles.signInContainer}>
        <Text>or</Text>
         <TouchableOpacity onPress={()=>{navigation.navigate('Register',[])}}>
      <Text style= {{fontSize: 20, color: '#B80028', fontWeight: 'bold', paddingBottom: 10}} >Register</Text>
         </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  signInContainer: {
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
 },
  content: {
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  forgotPassword: {
    color: '#B80028',
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#B80028',
    marginVertical: 20,
    padding: 10,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginWithEmail;
