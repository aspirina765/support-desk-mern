import styled from 'styled-components';

type ContainerProps = { width: string };

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: ${(props) => (props.width !== '' ? `${props.width}%` : '20%')};

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const InputType = styled.input<{ disabled?: boolean }>`
  border: 1px solid var(--border);
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--tertiary);
  justify-content: center;
  padding: 13px 16px;

  ::placeholder {
    color: var(--button-gray);
  }

  background: ${({ disabled }) =>
    disabled ? 'var(--border)' : 'var(--white)'};
`;

export const Label = styled.p`
  font-size: 12px;
  color: var(--tertiary);
  font-weight: 300;
`;

export const MessageError = styled.span`
  font-size: 12px;
  color: var(--danger);
  position: absolute;
  left: 5px;
  bottom: -17px;
  text-align: center;
`;
