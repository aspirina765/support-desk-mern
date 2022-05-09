import React from 'react';

import {
  Container,
  Name,
  Title,
  Info,
  Welcome,
  Submenus,
  Circle,
  EditEC,
  EditECItem,
  IconArrow,
} from './styles';

import iconNotification from '../../assets/notification.svg';
import iconPetido from '../../assets/petido.svg';
import iconArrowDown from '../../assets/arrow_down.png';

const Header: React.FC = () => (
  <Container>
    <Welcome>
      <Name>Olá Marco</Name>
      <Info>
        Seja bem vindo à central de operações da <Title>Ziggie</Title>
      </Info>
    </Welcome>
    <Submenus>
      <img src={iconNotification} alt="notificações" />

      <Circle src={iconPetido} alt="petido" />

      <EditEC>
        <EditECItem>Petido Petshop</EditECItem>

        <IconArrow src={iconArrowDown} alt="abrir" />
      </EditEC>
    </Submenus>
  </Container>
);

export default Header;
