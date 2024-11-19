import { RootState } from './store';

export const selectRecipes = (state: RootState) => state.recipes.recipes;
export const selectRecipeDetails = (state: RootState) =>
  state.recipes.recipeDetails;
export const selectCategories = (state: RootState) => state.recipes.categories;
export const selectSelectedRecipes = (state: RootState) =>
  state.recipes.selectedRecipes;
