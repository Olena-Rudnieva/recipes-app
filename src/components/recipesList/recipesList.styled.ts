import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0;
  list-style-type: none;
  margin-bottom: 40px;
`;

export const RecipeItem = styled.li`
  position: relative;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

export const RecipeText = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AccentText = styled.span`
  color: black;
  font-weight: semibold;
`;

export const HeartIcon = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
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
