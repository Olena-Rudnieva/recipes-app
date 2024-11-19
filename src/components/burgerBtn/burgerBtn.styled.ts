import styled from 'styled-components';

export const BurgerBtnWrapper = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
  }
`;
