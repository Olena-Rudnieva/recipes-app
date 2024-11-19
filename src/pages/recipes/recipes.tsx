import { useDispatch, useSelector } from 'react-redux';
import { Container, RecipesList } from '../../components';
import { Recipe } from '../../types';
import { selectRecipes } from '../../redux/recipesSelectors';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { fetchRecipesByName } from '../../redux/recipesOperations';
import { Title } from './recipes.styled';

const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipes = useSelector(selectRecipes) as Recipe[];
  console.log('recipes', recipes);

  useEffect(() => {
    dispatch(fetchRecipesByName(''));
  }, [dispatch]);

  return (
    <Container>
      <Title>Recipes</Title>
      <RecipesList recipes={recipes} />
    </Container>
  );
};

export default Recipes;
