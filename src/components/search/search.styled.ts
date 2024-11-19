import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #d50032;
  }

  &::placeholder {
    color: #6b7280;
    font-size: 16px;
  }
`;
