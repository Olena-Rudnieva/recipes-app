import styled from 'styled-components';

interface MobileMenuWrapperProps {
  isOpen: boolean;
}

export const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 218px;
  height: 100%;
  background-color: white;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  padding: 236px 0 40px;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 200;
  padding: 0;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    stroke: black;
    transition: transform 0.3s ease-in-out stroke 0.3s ease-in-out;

    &:hover,
    &:focus {
      stroke: #d50032;
      transform: scale(1.2);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
