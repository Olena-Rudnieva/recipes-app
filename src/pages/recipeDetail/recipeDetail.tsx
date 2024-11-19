import { useDispatch, useSelector } from 'react-redux';
import { Container, RecipeData } from '../../components';
import { Recipe } from '../../types';
import {
  selectRecipeDetails,
  selectSelectedRecipes,
} from '../../redux/recipesSelectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { fetchRecipeDetails } from '../../redux/recipesOperations';
import {
  addSelectedRecipe,
  removeSelectedRecipe,
} from '../../redux/recipesSlice';

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const recipe = useSelector(selectRecipeDetails) as Recipe;
  const selectedRecipes = useSelector(selectSelectedRecipes) as Recipe[];

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeDetails(id));
    }
  }, [dispatch, id]);

  const isSelected = selectedRecipes.some(
    (r: Recipe) => r.idMeal === recipe?.idMeal
  );

  const handleHeartClick = () => {
    if (isSelected) {
      dispatch(removeSelectedRecipe(recipe.idMeal));
    } else {
      dispatch(addSelectedRecipe(recipe));
    }
  };

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  return (
    <Container>
      <RecipeData
        recipe={recipe}
        isSelected={isSelected}
        handleHeartClick={handleHeartClick}
      />
    </Container>
  );
};

export default RecipeDetail;
