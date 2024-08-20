import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Button
      mode="contained"
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        // styles.container,
        styles.button,
        {
          backgroundColor: isPressed ? 'white' : '#B80028',
          borderColor: '#B80028',
          borderWidth: 1,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
        },
      ]}
      labelStyle={{
        color: isPressed ? '#B80028' : 'white',
        fontSize: 18,
        fontWeight:'bold'
        
      }}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
   button: {
    borderRadius: 10,
    margin: 10,
  },
});

export default CustomButton;
