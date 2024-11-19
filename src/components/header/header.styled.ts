import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding: 34px 0;

  @media (min-width: 768px) {
    padding: 32px 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Link = styled(NavLink)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
