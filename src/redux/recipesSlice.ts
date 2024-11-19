import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types';
import {
  fetchCategories,
  fetchRecipeDetails,
  fetchRecipesByCategory,
  fetchRecipesByFirstLetter,
  fetchRecipesByName,
} from './recipesOperations';

interface RecipesState {
  recipes: Recipe[];
  recipeDetails: Recipe | null;
  categories: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  recipeDetails: null,
  categories: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipesByName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipesByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipes = action.payload;
      state.error = null;
    });
    builder.addCase(fetchRecipesByName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(fetchRecipesByFirstLetter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipesByFirstLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipes = action.payload;
      state.error = null;
    });
    builder.addCase(fetchRecipesByFirstLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(fetchRecipeDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipeDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipeDetails = action.payload;
      state.error = null;
    });
    builder.addCase(fetchRecipeDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
    builder.addCase(fetchRecipesByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchRecipesByCategory.fulfilled,
      (state, action: PayloadAction<Recipe[]>) => {
        state.isLoading = false;
        state.recipes = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchRecipesByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null;
    });
  },
});

export const recipesReducer = recipesSlice.reducer;
