import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--quinary);
  height: fit-content;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--white);
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;

  img {
    padding: 40px 0px 40px 30px;
  }
`;

export const ContainerLogin = styled.div`
  margin-top: 91px;
  width: 359px;
  height: 466px;
  border: 1px solid var(--border);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    gap: 20px;

    span {
      position: absolute;
      text-align: center;
      color: red;
      font-size: 12px;
      left: 30%;
      top: 5%;
    }
  }
`;

export const Title = styled.p`
  margin-top: 55px;
  font-size: 32px;
  color: var(--tertiary);
  align-items: left;
  width: 100%;
  margin-left: 30%;
`;

export const SubTitle = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: var(--secundary);
  align-items: left;
  width: 100%;
  margin-left: 30%;
`;

export const Forgot = styled(Link)`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 55px;
  margin-right: 40%;
  color: var(--secundary);
  font-size: 14px;
  text-decoration: underline;
  text-align: right;
`;

export const CreateAccount = styled.p`
  font-size: 16px;
  color: var(--secundary);
  margin-top: 70px;
`;

export const Go = styled(Link)`
  color: var(--primary);
`;
