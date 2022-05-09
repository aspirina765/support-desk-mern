import styled, { css } from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const ButtonType = styled.button<{
  primary: boolean;
  cancel: Boolean;
  disabled: Boolean;
  width: number;
  height: number;
}>`
  background-color: ${({ primary, cancel }) =>
    primary
      ? 'var(--primary)'
      : cancel
      ? 'var(--button-gray)'
      : 'var(--white)'};
  border: 1px solid
    ${({ cancel }) => (cancel ? 'var(--button-gray)' : 'var(--primary)')};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ primary, cancel }) =>
    primary ? 'var(--white)' : cancel ? 'var(--tertiary)' : 'var(--primary)'};
  justify-content: center;
  text-align: center;
  transition: 0.4s ease;

  ${({ disabled, primary, cancel }) => css`
    opacity: ${disabled ? 0.2 : 1};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover {
      background-color: ${disabled || primary || cancel
        ? 'var(--white)'
        : 'var(--primary)'};
      color: ${disabled || primary
        ? 'var(--primary)'
        : cancel
        ? 'var(--tertiary)'
        : 'var(--white)'};
    }
  `}
`;

export const ReactLoadingCustom = styled(ReactLoading)<{ top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  right: 15px;
`;
