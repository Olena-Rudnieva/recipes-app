import { CloseButton, MobileMenuWrapper, Wrapper } from './mobileMenu.styled';
import { IoMdClose } from 'react-icons/io';
import { Nav } from '../nav';

interface MobileMenuProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({
  isMobile,
  isMobileMenuOpen,
  onClose,
}: MobileMenuProps) => {
  return (
    <MobileMenuWrapper isOpen={isMobileMenuOpen}>
      <CloseButton onClick={onClose}>
        <IoMdClose size="24" />
      </CloseButton>
      <Wrapper>
        <Nav
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={onClose}
        />
      </Wrapper>
    </MobileMenuWrapper>
  );
};
