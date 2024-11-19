import { useDispatch, useSelector } from 'react-redux';
import { Container, RecipeData } from '../../components';
import { Recipe } from '../../types';
import { selectRecipeDetails } from '../../redux/recipesSelectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { fetchRecipeDetails } from '../../redux/recipesOperations';

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const recipe = useSelector(selectRecipeDetails) as Recipe;
  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeDetails(id));
    }
  }, [dispatch, id]);

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  return (
    <Container>
      <RecipeData recipe={recipe} />
    </Container>
  );
};

export default RecipeDetail;
