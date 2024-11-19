import { RootState } from './store';

export const selectRecipes = (state: RootState) => state.recipes.recipes;
// export const selectTotalPagesNews = (state: RootState) => state.news.totalPages;
