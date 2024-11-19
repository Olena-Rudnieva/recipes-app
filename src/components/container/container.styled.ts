import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;

  @media (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
    width: 768px;
    max-width: 100%;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    max-width: 100%;
  }
`;
