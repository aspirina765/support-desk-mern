import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Menu,
  Logo,
  Name,
  IconHome,
  IconMyStore,
  IconPayments,
  IconSettings,
  IconLogout,
  IconArrowRight,
} from './styles';

import iconPetido from '../../assets/petido.svg';
import AuthContext from '../../contexts/auth.context';

const Sidebar: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const naviagte = useNavigate();

  const {
    location: { pathname },
  } = window;

  const go = (route: string): void => {
    naviagte(`/${route}`);
  };

  const verifyActived = (menu: string): boolean =>
    pathname.substring(1).includes(menu);

  const Menus = [
    {
      title: 'Resumo',
      pathname: 'home',
      icon: <IconHome active={verifyActived('home')} />,
    },
    {
      title: 'Minha loja',
      pathname: 'my-store',
      icon: (
        <IconMyStore
          active={
            verifyActived('my-store') ||
            verifyActived('my-store-full') ||
            verifyActived('my-store-create')
          }
        />
      ),
    },
    {
      title: 'Pedidos',
      pathname: 'requests',
      icon: <IconPayments active={verifyActived('requests')} />,
    },
    {
      title: 'Configurações',
      pathname: 'settings',
      icon: <IconSettings active={verifyActived('settings')} />,
    },
  ];

  return (
    <Container>
      <Logo src={iconPetido} alt="ziggie" loading="lazy" />

      {Menus.map((item) => (
        <Menu
          key={Math.random()}
          active={verifyActived(item.pathname)}
          onClick={(e) => go(item.pathname)}
        >
          {item.icon}
          <Name>{item.title}</Name>
        </Menu>
      ))}

      <Menu
        onClick={(e) => {
          signOut();
          go('');
        }}
      >
        <IconLogout />
        <Name>sair</Name>
        <IconArrowRight />
      </Menu>
    </Container>
  );
};

export default Sidebar;
