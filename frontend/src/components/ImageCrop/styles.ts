import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  > p {
    &:nth-child(1) {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      color: var(--secundary);
    }

    &:nth-child(2) {
      margin-top: 20px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      color: var(--secundary);
    }
  }
`;

export const WrapperCrop = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 130px;
  padding: 0px 130px;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 150px;
  left: 61%;
  width: 50%;
  transform: translateX(-50%);
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 120px;
  width: 266px;
  height: 56px;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 68px;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary);
    background-color: transparent;
    color: var(--primary);
    transition: 0.2s;
    font-weight: bold;
  }
`;

export const Cancel = styled.button`
  position: absolute;
  bottom: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  width: 266px;
  height: 56px;
  border-radius: 68px;
  color: var(--secundary);
  cursor: pointer;

  &:hover {
    background-color: var(--button-gray);
    color: #000;
    transition: 0.2s;
  }
`;
