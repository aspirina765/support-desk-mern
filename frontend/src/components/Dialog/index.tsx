import React from 'react';

import { Container, Background, Card, Body, IconClose } from './styles';

interface DialogProps {
  show: boolean;
  setShow: (state: boolean) => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ show, setShow, children }) => (
  <Container show={show}>
    <Background />

    <Card>
      <Body>
        <IconClose onClick={(e) => setShow(false)} />

        {children}
      </Body>
    </Card>
  </Container>
);

export default Dialog;
