import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

export const ContainerHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.PRIMARY_TEXT_BUTTON_COLOR};
`;
