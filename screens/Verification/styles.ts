import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

import { ThemeProps } from '../../theme';

interface ITextProps extends ThemeProps {
  bold?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 15%;
`;

export const InnerContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  align-items: center;
  justify-content: flex-end;
  padding-left: 15%;
  padding-right: 15%;
`;

export const IconContainer = styled.View<ThemeProps>`
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width / 1.9}px;
  height: ${Dimensions.get('window').width / 1.9}px;
  border-radius: ${Dimensions.get('window').width / 2}px;
  background: ${({ theme }) => theme.color.textColor};
  margin-bottom: 21px;
`;

export const Envelope = styled.Image``;

export const Title = styled.Text<ITextProps>`
  font-family: ${({ bold, theme }) =>
    bold ? theme.font.bold : theme.font.regular};
  font-size: 30px;
  color: ${({ theme }) => theme.color.textColor};
  margin-bottom: 17px;
`;
export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.textColor};
`;
export const Description = styled.Text<ITextProps>`
  font-family: ${({ bold, theme }) =>
    bold ? theme.font.bold : theme.font.regular};
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 105px;
`;
export const typeDescription = styled.Text<ITextProps>`
  
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 100px;
`;

export const CodeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const CodeInput = styled.View`
    color:#B80028;
    background-color:#B80028;

`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;