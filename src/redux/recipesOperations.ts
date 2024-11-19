import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../types';
import { API_URL } from '../constants';

export const fetchRecipesByName = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: string }
>('recipes/fetchByName', async (name, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/search.php`, {
      params: { s: name },
    });
    const data = response.data;
    return data.meals || [];
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchRecipesByFirstLetter = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: string }
>('recipes/fetchByFirstLetter', async (letter, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/search.php`, {
      params: { f: letter },
    });
    const data = response.data;
    return data.meals || [];
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchRecipeDetails = createAsyncThunk<
  Recipe,
  string,
  { rejectValue: string }
>('recipes/fetchDetails', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/lookup.php`, {
      params: { i: id },
    });
    const data = response.data;

    console.log('data', data);

    if (data.meals && data.meals.length > 0) {
      return data.meals[0];
    } else {
      return thunkAPI.rejectWithValue('No recipe found');
    }
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
