import styled from 'styled-components';

import { CardImage } from 'styled-icons/bootstrap';

export const Container = styled.div`
  position: absolute;
  width: 230px;
  top: 0px;
  align-self: center;
`;

export const ImageLeft = styled(CardImage)`
  position: absolute;
  width: 16px;
  height: 16px;
  left: -40px;
  top: -2px;
  color: var(--tertiary);
`;
export const ImageRight = styled(CardImage)`
  position: absolute;
  width: 23px;
  height: 23px;
  right: -40px;
  top: -6px;
  color: var(--tertiary);
`;
