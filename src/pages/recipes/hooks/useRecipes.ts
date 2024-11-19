// hooks/useRecipes.ts
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { AppDispatch } from '../../../redux/store';
import {
  selectCategories,
  selectRecipes,
} from '../../../redux/recipesSelectors';
import { Recipe } from '../../../types';
import {
  fetchCategories,
  fetchRecipesByName,
} from '../../../redux/recipesOperations';

export const useRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipes = useSelector(selectRecipes) as Recipe[];
  const categories = useSelector(selectCategories);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecipesByName(''));
  }, [dispatch]);

  const handleCategoryChange = (
    option: { value: string; label: string } | null
  ) => {
    if (option) {
      setSelectedCategory(option.value);
      dispatch(fetchRecipesByName(option.value));
    } else {
      setSelectedCategory(null);
      dispatch(fetchRecipesByName(''));
    }
  };

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      dispatch(fetchRecipesByName(searchTerm));
    } else {
      dispatch(fetchRecipesByName(''));
    }
  };

  return {
    recipes,
    categories,
    selectedCategory,
    currentPage,
    itemsPerPage,
    categoryOptions,
    paginatedRecipes,
    handleCategoryChange,
    handlePageChange,
    handleSearch,
  };
};
