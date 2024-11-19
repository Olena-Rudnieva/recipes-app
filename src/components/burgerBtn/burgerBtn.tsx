import { BurgerBtnWrapper } from './burgerBtn.styled';
import burgerMenu from '../../assets/icons/burgerMenu.svg';

type BurgerBtnProps = {
  onClick: () => void;
};

export const BurgerBtn = ({ onClick }: BurgerBtnProps) => {
  return (
    <BurgerBtnWrapper onClick={onClick}>
      <img src={burgerMenu} alt="Logo" width="40" height="40" />
    </BurgerBtnWrapper>
  );
};
