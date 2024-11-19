import { Recipe } from '../types';

export const formatIngredients = (recipe: Recipe) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const amount = recipe[`strMeasure${i}` as keyof Recipe];

    if (ingredient) {
      ingredients.push(
        <li key={i}>
          <span>•</span> {amount} {ingredient}
        </li>
      );
    }
  }

  return ingredients;
};
