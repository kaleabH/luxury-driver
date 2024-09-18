import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction} from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './styles';

type IRef = TextInput | null;
type InputProps = {
  OnChangeText: ((text: string) => void) | undefined
}

const CodeInput: ForwardRefRenderFunction<IRef, InputProps & TextInputProps> = (
  props: InputProps ,
  // ref: React.LegacyRef<TextInput> | undefined
  ref: ForwardedRef<TextInput>
) => {
  return (
    <S.Container>

      <S.Input ref={ref} keyboardType="numeric" maxLength={1} {...props} />
    </S.Container>
  );
};

export default forwardRef(CodeInput);
