import styled from 'styled-components';

export const Title = styled.p`
  font-size: 16px;
  color: var(--tertiary);
`;

export const ContainerMyRequests = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 24px 16px;
  background-color: var(--white);
  border-radius: 8px;
  margin-bottom: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  > select {
    margin-right: 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 11px 16px;
    width: 131px;
    color: var(--secundary);
    cursor: pointer;

    > option {
      background: #bc0000 !important;
    }
  }

  > div {
    position: relative;

    > img {
      top: 17px;
      left: 20px;
      position: absolute;
    }

    > input {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 48px;
      width: 324px;
      color: var(--secundary);

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    @media (max-width: 900px) {
      margin-top: 16px;
    }
  }
`;

export const TableRequests = styled.div`
  margin-top: 16px;
  background-color: var(--white);
  width: 100%;
  padding: 0px 16px 26px 16px;
  border-radius: 8px;
  overflow: hidden;
`;

type ButtonActionProps = { status: string };

export const ButtonAction = styled.button<ButtonActionProps>`
  height: 32px;
  width: 81px;
  flex-shrink: 0;

  border-radius: 8px;

  color: ${(props) =>
    props.status.includes('Aguardando') || props.status.includes('Separando')
      ? 'var(--primary)'
      : 'var(--quaternary)'};
  border: 0.5px solid
    ${(props) =>
      props.status.includes('Aguardando') || props.status.includes('Separando')
        ? 'var(--primary)'
        : 'var(--border)'};
  background-color: ${(props) =>
    props.status.includes('Aguardando') || props.status.includes('Separando')
      ? 'var(--white)'
      : 'var(--border)'};

  font-size: 12px;
  font-weight: 400;

  text-align: center;

  cursor: ${(props) =>
    props.status.includes('Aguardando') || props.status.includes('Separando')
      ? 'pointer'
      : ''};

  &:hover {
    transition: 0.2s;
    color: ${(props) =>
      props.status.includes('Aguardando') || props.status.includes('Separando')
        ? 'var(--white)'
        : 'var(--quaternary)'};
    background-color: ${(props) =>
      props.status.includes('Aguardando') || props.status.includes('Separando')
        ? 'var(--primary)'
        : 'var(--border)'};
    border: 0.5px solid
      ${(props) =>
        props.status.includes('Aguardando') ||
        props.status.includes('Separando')
          ? 'var(--primary)'
          : 'var(--border)'};
  }
`;
