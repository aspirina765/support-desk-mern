import styled from 'styled-components';

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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin-top: 29px;
  color: var(--tertiary);
  font-size: 48px;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  margin-top: 2px;
  color: var(--secundary);
  font-size: 16px;
  font-weight: 400;
`;
