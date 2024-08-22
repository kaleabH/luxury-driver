import React, { useRef, MutableRefObject, RefObject } from 'react';
import { TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import CodeInput from '../../components/CodeInput';
import FIcon from 'react-native-vector-icons/FontAwesome';

// import envelopeImg from '../../assets/envelope.png';
import * as S from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamsList } from '../../navigations/StackNavigator';


type VerificationScreenProps = StackScreenProps<StackParamsList, 'Verification'>
export type VerificationPropsList ={}


const Verification: React.FC<VerificationScreenProps> = ({navigation, ...props}) => {
  // const navigation = useNavigation();
  const codeRef2 = useRef(null);
  const codeRef3 = useRef(null);
  const codeRef4 = useRef(null);

  function focusNext(ref: RefObject<TextInput | null>) {
    ref.current?.focus();
  }

  return (
    <S.Container>
      <S.InnerContainer>
        <StatusBar style="dark" />
        <S.IconContainer>
          {/* envelope-o */}
          <FIcon name="envelope-o" color={"white"} size={90} />
          {/* <S.Envelope source={envelopeImg} /> */}
        </S.IconContainer>
        <S.Title>
          <S.Title>Verification </S.Title>
          <S.Title bold>Code</S.Title>
        </S.Title>
        <S.Description>
          <S.Description>
            Please type the verification code sent to
          </S.Description>
          <S.Description bold> +251 22 123 73</S.Description>
        </S.Description>
        <S.CodeContainer>
          <CodeInput onChangeText={() => focusNext(codeRef2)} autoFocus />
          <CodeInput onChangeText={() => focusNext(codeRef3)} ref={codeRef2} />
          <CodeInput onChangeText={() => focusNext(codeRef4)} ref={codeRef3} />
          <CodeInput
            // returnKeyType="send"
            onChangeText={() => navigation.navigate('DrawerNavigator')}
            onSubmitEditing={() => navigation.navigate('DrawerNavigator')}
            ref={codeRef4}
          />
        </S.CodeContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Verification;