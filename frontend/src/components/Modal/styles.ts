import styled from 'styled-components';

import { CloseOutline } from 'styled-icons/evaicons-outline';

type ShowProps = { show: boolean };

export const Container = styled.div<ShowProps>`
  display: ${(props) => (props.show ? 'block' : 'none')} !important;
  animation: bounce 0.7s alternate;

  @keyframes bounce {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Background = styled.div`
  z-index: 9;
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.6;
`;

export const Card = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

type BodyProps = {
  width: string | undefined;
  height: string | undefined;
};

export const Body = styled.div<BodyProps>`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background: var(--white);
  border-radius: 16px;
  width: ${(props) => (props.width ? props.width : 815)}px;
  height: ${(props) => (props.height ? props.height : 692)}px;
  padding: 16px;
`;

export const IconClose = styled(CloseOutline)`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: var(--tertiary);
  width: 20px;
  height: 20px;
`;
