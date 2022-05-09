import styled from 'styled-components';

interface CardProps {
  marginTop?: string;
}

interface LegendProps extends CardProps {}

interface LegendValuesProps extends CardProps {}

interface ItemTopProps {
  padding?: string;
  borderRightColor: string;
  borderBottomColor: string;
}

export const Title = styled.p`
  font-size: 14px;
  color: var(--tertiary);
  font-weight: 300px;
`;

export const Value = styled.p`
  font-size: 26px;
  color: var(--blue);
  font-weight: 500px;
  margin-top: 52px;
  text-align: center;
  white-space: nowrap;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${(props) => props.marginTop}px;
`;

export const Column = styled.div`
  width: 90px;
  padding: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  border: 1px dashed var(--border);
  border-left-color: var(--white);
`;

export const Legend = styled.p<LegendProps>`
  font-size: 12px;
  color: var(--tertiary);
  font-weight: 300px;
  margin-top: ${(props) => (props.marginTop ? props?.marginTop : 0)}px;
  white-space: nowrap;
`;

export const LegendValue = styled.p<LegendValuesProps>`
  font-size: 12px;
  color: var(--tertiary);
  font-weight: 700px;
  margin-top: ${(props) => (props.marginTop ? props?.marginTop : 0)}px;
`;

export const ItemTop = styled.div<ItemTopProps>`
  width: 90;
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  border: 1px dashed var(--border);
  border-left-color: var(--white);
  border-top-color: var(--white);
  border-right-color: ${(props) => `var(${props.borderRightColor})`};
  border-bottom-color: ${(props) => `var(${props.borderBottomColor})`};
`;
