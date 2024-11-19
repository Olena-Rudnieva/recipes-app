import { Link } from 'react-router-dom';
import { Recipe } from '../../types';
import {
  AccentText,
  List,
  RecipeImage,
  RecipeInfo,
  RecipeItem,
  RecipeText,
  RecipeTitle,
} from './recipesList.styled';

interface RecipesListProps {
  recipes: Recipe[];
}

export const RecipesList = ({ recipes }: RecipesListProps) => {
  return (
    <List>
      {recipes.map((recipe) => (
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
        </RecipeItem>
      ))}
    </List>
  );
};
