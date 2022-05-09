import styled from 'styled-components';

export const ContainerItem = styled.div`
  position: relative;
  background-color: var(--item-request);
  padding: 15px;
`;

export const ViewMore = styled.p`
  margin-top: 14px;
  color: var(--primary);
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--secundary);
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px 15px;
  border-bottom: 1px solid var(--quinary);
  flex-wrap: wrap;

  &:last-child {
    border-bottom: 0px;
  }

  > div {
    margin: 0px 16px;

    > p {
      font-size: 12px;
      font-weight: 300;
      color: var(--tertiary);
      margin: 8px 0px;

      &:nth-child(2) {
        font-weight: 500;
        white-space: pre-wrap;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContainerModalClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 7px;
  width: 100%;

  > p {
    font-size: 24px;
    color: var(--tertiary);

    &:nth-child(2) {
      margin-top: 8px;
      font-size: 16px;
    }
  }
`;

export const RowOne = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  > div {
    > p {
      font-size: 12px;
      font-weight: 300;
      color: var(--tertiary);
      margin: 8px 0px;

      &:nth-child(2) {
        font-weight: 500;
        white-space: pre-wrap;
      }
    }
  }
`;

export const RowOther = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 24px;

  > p {
    font-size: 12px;
    font-weight: 300;
    color: var(--tertiary);

    &:nth-child(2) {
      margin-top: 7px;
      font-weight: 500;
    }
  }
`;
