import { useSelector } from 'react-redux';
import { selectSelectedRecipes } from '../../../redux/recipesSelectors';
import { Recipe } from '../../../types';
import { getGroupedIngredients, getGroupedInstructions } from '../../../utils';

export const useSelectedRecipes = () => {
  const selectedRecipes = useSelector(selectSelectedRecipes) as Recipe[];

  const groupedIngredients = getGroupedIngredients(selectedRecipes);
  const groupedInstructions = getGroupedInstructions(selectedRecipes);

  return { selectedRecipes, groupedIngredients, groupedInstructions };
};
