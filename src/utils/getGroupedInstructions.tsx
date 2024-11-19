import { Recipe } from '../types';

export const getGroupedInstructions = (recipes: Recipe[]): string[] => {
  const instructions: string[] = [];

  recipes.forEach((recipe) => {
    if (recipe.strInstructions) {
      instructions.push(recipe.strInstructions);
    }
  });

  return instructions;
};
