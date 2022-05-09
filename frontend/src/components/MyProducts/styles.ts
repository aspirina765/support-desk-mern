import styled from 'styled-components';

export const Title = styled.p`
  font-size: 16px;
  color: var(--tertiary);
`;

export const ContainerMyProducts = styled.div`
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

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 14px;
    position: absolute;
    right: 40px;
    cursor: pointer;

    > p {
      margin-left: 10px;
    }

    &:hover {
      border: none;
      background-color: var(--primary);
      color: var(--white);
    }
  }
`;

export const ContainerTitleMyProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:nth-child(2) {
    color: var(--primary);
    text-align: center;
    font-size: 14px;
    margin-right: 15px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: var(--secundary);
    }
  }
`;

export const TableProducts = styled.div`
  margin-top: 16px;
  background-color: var(--white);
  width: 100%;
  padding: 0px 16px 26px 16px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ViewMoreProducts = styled.p`
  margin-top: 24px;
  color: var(--primary);
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: var(--secundary);
  }
`;

export const DialogTitle = styled.p`
  margin-top: 72px;
  font-size: 24px;
  color: var(--tertiary);
  font-weight: 400px;
`;

export const DialogQuest = styled.p`
  text-align: center;
  font-size: 16px;
  color: var(--tertiary);
  font-weight: 300px;
  margin: 32px 16px 0px;
`;

type DialogButtonProps = { marginTop: string };

export const DialogButton = styled.button<DialogButtonProps>`
  font-size: 16px;
  color: var(--tertiary);
  font-weight: 400;
  padding: 17px 66px;
  margin-top: ${(props) => props.marginTop}px;
  cursor: pointer;
  border-radius: 68px;

  &:hover {
    background: var(--quinary);
    transition: 0.3s;
  }
`;
