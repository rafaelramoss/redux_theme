import React from 'react';

import {
  Container,
  ContainerHeader,
  ContainerButton,
  Texto,
  Button,
  TextButton,
} from './style';

export default function Home() {
  return (
    <Container>
      <ContainerHeader>
        <Texto>Hey, what´s up?!</Texto>
        <Texto> Click in the button for change the theme</Texto>
      </ContainerHeader>
      <ContainerButton>
        <Button>
          <TextButton>Click me :)</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
}
