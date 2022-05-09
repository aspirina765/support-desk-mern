import styled from 'styled-components';
import { KeyboardArrowRight } from 'styled-icons/material-rounded';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > p {
    :nth-child(1) {
      cursor: pointer;
    }
    font-size: 14px;
    color: var(--tertiary);
    text-decoration: underline;
    font-weight: 300;
  }

  > strong {
    font-size: 14px;
    color: var(--tertiary);
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const IconArrow = styled(KeyboardArrowRight)`
  width: 20px;
  height: 20px;
  color: var(--tertiary);
`;
