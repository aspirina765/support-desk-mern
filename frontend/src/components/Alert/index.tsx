import React from 'react';
import Button, { ButtonProps } from '../Button';

import { Container, Card, Title, SubTitle, Wrapper } from './styles';

interface AlertProps {
  title: string;
  subtitle: string;
  button: ButtonProps;
}

const Alert: React.FC<AlertProps> = ({ title, subtitle, button }) => (
  <Wrapper>
    <Container />
    <Card>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>

      <Button {...button}>{button?.text}</Button>
    </Card>
  </Wrapper>
);

export default Alert;
