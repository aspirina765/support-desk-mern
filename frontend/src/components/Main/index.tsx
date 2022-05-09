import React from 'react';

import Header from '../Header';

import { Container } from './styles';

interface MainProps {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => (
  <Container>
    <Header />

    {children}
  </Container>
);

export default Main;
