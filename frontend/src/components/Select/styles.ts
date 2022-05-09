import styled from 'styled-components';

type ContainerProps = { width: string };

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: ${(props) => (props.width !== '' ? props.width : '20')}%;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const SelectType = styled.select`
  border: 1px solid var(--border);
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--tertiary);
  justify-content: center;
  padding: 13px 16px;
  cursor: pointer;

  > option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  color: var(--tertiary);
  font-weight: 300;
`;

export const MessageError = styled.p`
  font-size: 12px;
  color: var(--danger);
  position: absolute;
  left: 5px;
  bottom: -17px;
  text-align: center;
`;
