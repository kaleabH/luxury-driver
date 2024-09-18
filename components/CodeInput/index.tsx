import React, { forwardRef, RefForwardingComponent } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './styles';

type IRef = TextInput | null;
type InputProps = {
  OnChangeText: ((text: string) => void) | undefined
}

const CodeInput: RefForwardingComponent<IRef, TextInputProps> = (
  props: InputProps ,
  ref: React.LegacyRef<TextInput> | undefined
) => {
  return (
    <S.Container>

      <S.Input ref={ref} keyboardType="numeric" maxLength={1} {...props} />
    </S.Container>
  );
};

export default forwardRef(CodeInput);
