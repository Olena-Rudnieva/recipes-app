import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: baseline;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 50px;
`;

export const ProductsWrapper = styled.div``;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 700px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const VideoWrapper = styled.div`
  margin-top: 30px;
  width: 700px;
`;

export const SourceWrapper = styled.div`
  margin-top: 30px;
`;

export const HeartIcon = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.isSelected ? 'red' : 'gray')};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.isSelected ? 'darkred' : 'darkgray')};
  }

  &::before {
    content: ${(props) => (props.isSelected ? "'❤️'" : "'🤍'")};
  }
`;
