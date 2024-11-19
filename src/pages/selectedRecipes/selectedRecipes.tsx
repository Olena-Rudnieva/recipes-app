import { useSelector } from 'react-redux';
import { Container, RecipesList } from '../../components';
import { selectSelectedRecipes } from '../../redux/recipesSelectors';
import { Items, Subtitle, Text, Title } from './selectedRecipes.styled';
import { getGroupedIngredients, getGroupedInstructions } from '../../utils';

const SelectedRecipes = () => {
  const selectedRecipes = useSelector(selectSelectedRecipes);
  const groupedIngredients = getGroupedIngredients(selectedRecipes);
  const groupedInstructions = getGroupedInstructions(selectedRecipes);

  return (
    <Container>
      <Title>Selected Recipes</Title>
      {selectedRecipes.length === 0 ? (
        <Text>No selected recipes</Text>
      ) : (
        <>
          <RecipesList recipes={selectedRecipes} />
          <Subtitle>Grouped Ingredients:</Subtitle>
          <Items>
            {groupedIngredients.map((ingredient, index) => (
              <div key={index}>{ingredient}.</div>
            ))}
          </Items>
          <Subtitle>Grouped Instructions:</Subtitle>
          <Items>
            {groupedInstructions.map((instruction, index) => (
              <>
                <p key={index}>{instruction}</p>
                <br />
              </>
            ))}
          </Items>
        </>
      )}
    </Container>
  );
};

export default SelectedRecipes;
