import React from 'react';

import { Container, Info, Title, SubTitle } from './styles';

import gif from '../../assets/gif/dog_jump.gif';

interface LoadingPageProps {
  title?: string;
  subtitle?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  title = 'Carregando',
  subtitle = 'Aguarde um momento!',
}) => (
  <Container>
    <Info>
      <img src={gif} alt="ziggie" />

      <Title>{title}...</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Info>
  </Container>
);

export default LoadingPage;
