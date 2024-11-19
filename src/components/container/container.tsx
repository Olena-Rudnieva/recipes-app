import { ReactNode } from 'react';
import { Wrapper } from './container.styled';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};
