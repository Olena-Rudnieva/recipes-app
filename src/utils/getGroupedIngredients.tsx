import { Recipe } from '../types';

export const getGroupedIngredients = (recipes: Recipe[]): string[] => {
  const ingredientMap: Record<string, number> = {};

  const processIngredients = (recipe: Recipe, index: number = 1): void => {
    const ingredient = recipe[`strIngredient${index}`];
    const measure = recipe[`strMeasure${index}`];

    if (ingredient && ingredient !== '') {
      const ingredientKey = `${measure} ${ingredient}`;
      ingredientMap[ingredientKey] = (ingredientMap[ingredientKey] || 0) + 1;
    }

    if (index < 20) {
      processIngredients(recipe, index + 1);
    }
  };

  recipes.forEach((recipe) => {
    processIngredients(recipe);
  });

  return Object.entries(ingredientMap)
    .sort((a, b) => b[1] - a[1])
    .map(([ingredient]) => `- ${ingredient}`);
};
