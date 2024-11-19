import { Link } from 'react-router-dom';
import { Recipe } from '../../types';
import {
  AccentText,
  HeartIcon,
  List,
  RecipeImage,
  RecipeInfo,
  RecipeItem,
  RecipeText,
  RecipeTitle,
} from './recipesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectSelectedRecipes } from '../../redux/recipesSelectors';
import {
  addSelectedRecipe,
  removeSelectedRecipe,
} from '../../redux/recipesSlice';

interface RecipesListProps {
  recipes: Recipe[];
}

export const RecipesList = ({ recipes }: RecipesListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedRecipes = useSelector(selectSelectedRecipes);

  const handleHeartClick = (recipe: Recipe) => {
    const isSelected = selectedRecipes.some(
      (r: Recipe) => r.idMeal === recipe.idMeal
    );
    if (isSelected) {
      dispatch(removeSelectedRecipe(recipe.idMeal));
    } else {
      dispatch(addSelectedRecipe(recipe));
    }
  };
  return (
    <List>
      {recipes.map((recipe) => {
        const isSelected = selectedRecipes.some(
          (r: Recipe) => r.idMeal === recipe.idMeal
        );

        return (
          <RecipeItem key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
              <RecipeTitle>{recipe.strMeal}</RecipeTitle>

              <RecipeInfo>
                <RecipeText>
                  <AccentText>Cuisine: </AccentText>
                  {recipe.strArea}
                </RecipeText>
                <RecipeText>
                  <AccentText>Category: </AccentText>
                  {recipe.strCategory}
                </RecipeText>
              </RecipeInfo>
            </Link>
            <HeartIcon
              onClick={() => handleHeartClick(recipe)}
              isSelected={isSelected} // Передаємо isSelected в HeartIcon
            />
          </RecipeItem>
        );
      })}
    </List>
  );
};
