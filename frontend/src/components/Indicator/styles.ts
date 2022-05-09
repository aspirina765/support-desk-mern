import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 16px;
  margin-left: -6px;
`;

export const Card = styled.div`
  min-width: 176px;
  width: 15.7%;
  height: 92px;
  background-color: var(--white);
  border-radius: 8px;
  padding: 16px 19px;
  margin-bottom: 16px;
  margin-left: 6px;
  margin-right: 6px;
  flex-grow: 2;

  &:nth-child(6) {
    margin-right: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Legend = styled.p`
  font-size: 14px;
  color: var(--tertiary);
  font-weight: 300;
`;

export const Value = styled.p`
  margin-top: 19px;
  font-size: 18px;
  font-weight: 400;
  color: var(--tertiary);
`;
