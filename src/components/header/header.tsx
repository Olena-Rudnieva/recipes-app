import { HeaderWrapper, Link, Navigation, Wrapper } from './header.styled';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../container';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { BurgerBtn } from '../burgerBtn';
import { MobileMenu } from '../mobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Navigation>
            <Link to="/">
              <Logo />
            </Link>
            <Nav isMobile={isMobile} isMobileMenuOpen={false} />
          </Navigation>
          <BurgerBtn onClick={toggleMenu} />
        </Wrapper>
      </Container>
      {isMobileMenuOpen && (
        <MobileMenu
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={toggleMenu}
        />
      )}
    </HeaderWrapper>
  );
};
