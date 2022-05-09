import React from 'react';

import { Container, Background, Card, Body, IconClose } from './styles';

interface ModalProps {
  width?: string | undefined;
  height?: string | undefined;
  show: boolean;
  setShow: (state: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  show,
  setShow,
  children,
}) => (
  <Container show={show}>
    <Background />

    <Card>
      <Body width={width} height={height}>
        <IconClose onClick={(e) => setShow(false)} />

        {children}
      </Body>
    </Card>
  </Container>
);

export default Modal;
