import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  width: 250px;
  margin-bottom: 40px;
`;

export const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: '20px',
    borderColor: state.isFocused ? '#D50032' : base.borderColor,
    boxShadow: state.isFocused ? '0 0 0 1px #D50032' : base.boxShadow,
    '&:hover': {
      borderColor: '#D50032',
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? '#D50032' : base.backgroundColor,
    color: state.isFocused ? '#fff' : base.color,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#D50032',
      color: '#fff',
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '8px',
    overflow: 'hidden',
  }),
};
