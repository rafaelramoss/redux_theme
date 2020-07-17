import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { switchTheme } from '../../store/modules/actions';
import { lightTheme, darkTheme } from '../../themes';
import {
  Container,
  ContainerHeader,
  ContainerButton,
  Texto,
  Button,
  TextButton,
} from './style';

export default function Home() {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.STATUS_BAR}
        backgroundColor={theme.COLOR_STATUS_BAR}
      />
      <Container>
        <ContainerHeader>
          <Texto>Hey, what´s up?!</Texto>
          <Texto> Click in the button for change the theme</Texto>
        </ContainerHeader>
        <ContainerButton>
          {theme.mode === 'light' ? (
            <Button onPress={() => dispatch(switchTheme(darkTheme))}>
              <TextButton>Change to Dark Theme</TextButton>
            </Button>
          ) : (
            <Button onPress={() => dispatch(switchTheme(lightTheme))}>
              <TextButton>Change to Light Theme</TextButton>
            </Button>
          )}
        </ContainerButton>
      </Container>
    </ThemeProvider>
  );
}
