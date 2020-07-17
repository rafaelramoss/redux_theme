import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
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
  color: #282828;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: #999;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fafafa;
`;
