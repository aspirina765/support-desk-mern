import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  animation: bounce 1s alternate;
  position: absolute;
  z-index: 999;
  background: var(--white);
  opacity: 0.8;

  @keyframes bounce {
    from {
      opacity: 0;
      background: var(--secundary);
    }
    to {
      opacity: 1;
      background: var(--white);
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  min-width: 300px;

  background: var(--white);
  elevation: 2;
  border: 1px solid #ddd;
  border-radius: 8px;
  position: absolute;
  top: 30vh;
  left: 40%;
  z-index: 9999;
  animation: bounce 4s ease;
  box-shadow: 0 2px 0px rgb(0 0 0 / 0.1);
  /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */

  @keyframes bounce {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      background: var(--white);
    }
  }
`;

export const Title = styled.p`
  color: var(--tertiary);
  font-size: 24px;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  margin-top: 32px;
  margin-bottom: 44px;
  color: var(--secundary);
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  text-align: center;
`;
