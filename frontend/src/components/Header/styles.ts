import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Welcome = styled.div``;

export const Name = styled.p`
  font-size: 24px;
  color: var(--tertiary);
  font-weight: 500;
`;

export const Info = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: var(--tertiary);
  font-weight: 300;
`;

export const Title = styled.span`
  color: var(--primary);
  font-weight: 500;
`;

export const Submenus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.img`
  margin-left: 19px;
  margin-right: 130px;
  z-index: 1;
`;

export const EditEC = styled.div`
  z-index: 0;
  position: absolute;
  text-align: center;
  font-size: 12px;
  color: var(--tertiary);
  background: var(--white);
  width: 163px;
  height: 40px;
  right: 24px;
  border-radius: 48px;
`;

export const EditECItem = styled.p`
  margin-top: 13px;
  margin-left: 15px;
`;

export const IconArrow = styled.img`
  position: absolute;
  z-index: 1;
  right: 18px;
  top: 17px;
`;
