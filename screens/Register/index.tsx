import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Checkbox, Text, Avatar, Menu, Divider, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamsList } from '../../navigations/StackNavigator';
import { register } from '../../services/AuthService';
import { Platform } from 'react-native';

export interface RegisterScreenProps {

}

const Register: React.FC<StackScreenProps<StackParamsList, 'Register'>> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] =useState('');
  const [emailError, setEmailError] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<Array<string> | null>(null);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country| null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('ET');
  const [city, setCity] = useState('');
  const [isChecked, setChecked] = useState(false);

  const hasErrors = () => {
    return !email.includes('@');
  };

  const handleRegister = async () => {
    const deviceInfo = `${Platform.OS} ${Platform.Version}`
       try{
         await register({
          role: 'driver',
          deviceInfo,
          firstName,
          lastName,
          email,
          phone,
          password,
          countryCode,
          city,
         });

         navigation.navigate('DrawerNavigator', {screen: 'Home'});

       }catch(e: any){
        if(e?.response?.status === 422){
          setErrorMessage(e.response.data.errors);
          console.log('login error', e)
       }
       }

  };


  const handleSelectCountry = (country: Country) => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setVisible(false); // Close the country picker after selection
  };

  const theme = {
    colors: {
      primary: '#B80028',
      background: '#FFFFFF',
      text: '#000000',
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Bar */}
      <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }}>
        <Appbar.Content title="Register" />
      </Appbar.Header>

      <View style={styles.content}>
        {/* Avatar Selector */}
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => console.log('Select Avatar')}>
            <Avatar.Icon size={100} icon="account" style={styles.avatar} />
          </TouchableOpacity>
        </View>

        {/* First Name Input */}
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />

        {/* Last Name Input */}
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />

        {/* Email Input */}
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          mode="outlined"
          left={<TextInput.Icon icon="phone" />}
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
          />
        {/* Email Input */}
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
        

        {/* Password Input */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={isPasswordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            />
          }
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />

        {/* Confirm Password Input */}
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
              onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
            />
          }
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />

        {/* Country Selector */}
        <CountryPicker
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
          countryCode={countryCode}
          withCallingCode={false}
          visible={visible}
          onClose={() => setVisible(false)}
          onSelect={handleSelectCountry}
          containerButtonStyle={styles.countryPicker}
          theme={{
            fontFamily: '',
            primaryColor: theme.colors.primary ,
          }}
        />
        {selectedCountry && (
          <Text style={styles.selectedCountryText}>
            {selectedCountry.cca2}
          </Text>
        )}

        {/* City Input */}
        <TextInput
          label="City"
          value={city}
          onChangeText={setCity}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: theme.colors.primary } }}
        />

          <HelperText type="error" visible={emailError ||(errorMessage === null)}>
            {
              (emailError)? 'invalid email format' : errorMessage && (errorMessage.reduce((currentValue, array)=> currentValue+array))
            }
          </HelperText>

        {/* Terms & Conditions Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!isChecked)}
            color={theme.colors.primary}
          />
          <Text onPress={() => setChecked(!isChecked)} style={styles.checkboxText}>
            I AGREE TO THE TERMS AND CONDITIONS
          </Text>
        </View>

        {/* Register Button */}
        <Button
          icon={() => <Icon name="account-plus" size={20} color="#FFFFFF" />}
          mode="contained"
          onPress={handleRegister}
          style={styles.registerButton}
          labelStyle={styles.buttonLabel}
        >
          REGISTER
        </Button>

        {/* Already have an account? Login link */}
        <TouchableOpacity onPress={() => navigation.navigate('Login', [])}>
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    backgroundColor: '#B80028',
  },
  input: {
    marginVertical: 10,
  },
  countryPicker: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#B80028',
    borderRadius: 5,
    marginVertical: 10,
  },
  selectedCountryText: {
    fontSize: 16,
    color: '#B80028',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#000000',
  },
  registerButton: {
    backgroundColor: '#B80028',
    paddingVertical: 10,
    marginVertical: 20,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  loginLink: {
    color: '#B80028',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Register;
