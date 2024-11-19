import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavWrapperProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  display: ${({ isMobile, isMobileMenuOpen }) =>
    isMobile && isMobileMenuOpen ? 'flex' : 'none'};
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: 10px;
  margin-left: ${({ isMobile }) => (isMobile ? '0' : '264px')};

  @media (min-width: 769px) {
    display: flex;
    gap: 10px;
    margin-left: 264px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 15px 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.25;
  text-align: center;
  color: black;
  border-radius: 30px;
  border: 1px solid gray;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &.active {
    border-color: #d50032;
  }

  &:hover,
  :focus {
    color: #d50032;
    border-color: #d50032;
  }
`;
