import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  padding: 8px 12px;
  border: 2px solid ${({ isActive }) => (isActive ? '#d50032' : '#cccccc')};
  border-radius: 50px;
  background-color: ${({ isActive }) => (isActive ? '#d50032' : '#ffffff')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#333333')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    border-color: #d50032;
    background-color: ${({ isActive }) => (isActive ? '#d50032' : '#ffffff')};
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#d50032')};
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #cccccc;
    cursor: not-allowed;
    border-color: #eeeeee;
  }
`;

export const Dots = styled.span`
  padding: 8px 12px;
  color: #cccccc;
`;
