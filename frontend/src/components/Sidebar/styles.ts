import styled, { css } from 'styled-components';

import { Home, Payments } from 'styled-icons/material-outlined';
import { Storefront } from 'styled-icons/ionicons-outline';
import { User } from 'styled-icons/remix-line';
import { Settings2Outline } from 'styled-icons/evaicons-outline';
import { LogOut } from 'styled-icons/feather';
import { KeyboardArrowRight } from 'styled-icons/material-rounded';

type ActivedProps = { active?: boolean };

export const Container = styled.div`
  grid-area: ME;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
  width: 80px;
`;

export const Menu = styled.button<ActivedProps>`
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 25px;
  margin-top: 23px;
  width: 162px;
  height: 48px;
  background-color: ${(props) =>
    props.active ? 'var(--primary)' : 'transparent'};
  color: ${(props) => (props.active ? 'var(--white)' : 'var(--secundary)')};
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? 'var(--primary)' : 'var(--quinary)'};
    transition: 0.3s;
  }
`;

export const Name = styled.p`
  margin: 0 10px;
  font-weight: 300;
`;

const iconCSS = css<ActivedProps>`
  width: 21px;
  height: 21px;
  color: ${(props) => (props.active ? 'var(--white)' : 'var(--quaternary)')};
`;

export const IconHome = styled(Home)`
  ${iconCSS}
`;

export const IconMyStore = styled(Storefront)`
  ${iconCSS}
  width: 18px;
  height: 18px;
`;

export const IconPayments = styled(Payments)`
  ${iconCSS}
`;

export const IconSettings = styled(Settings2Outline)`
  ${iconCSS}
`;

export const IconLogout = styled(LogOut)`
  ${iconCSS}
`;

export const IconLogOut = styled(LogOut)`
  ${iconCSS}
`;

export const IconArrowRight = styled(KeyboardArrowRight)`
  ${iconCSS}
  position: absolute;
  top: 15px;
  right: 10px;

  color: ${(props) => (props.active ? 'var(--white)' : 'transparent')};

  &:hover {
    color: var(--quaternary);
  }
`;
