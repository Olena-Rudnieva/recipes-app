import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Container, Pagination, RecipesList } from '../../components';
import { Recipe } from '../../types';
import { selectCategories, selectRecipes } from '../../redux/recipesSelectors';
import { useEffect, useState } from 'react';
import { AppDispatch } from '../../redux/store';
import {
  fetchCategories,
  fetchRecipesByName,
} from '../../redux/recipesOperations';
import { customStyles, Title, Wrapper } from './recipes.styled';

const Recipes = () => {
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

  return (
    <Container>
      <Title>Recipes</Title>
      <Wrapper>
        <Select
          options={categoryOptions}
          onChange={handleCategoryChange}
          isClearable
          styles={customStyles}
          placeholder="Select a category"
          value={categoryOptions.find(
            (option) => option.value === selectedCategory
          )}
        />
      </Wrapper>
      <RecipesList recipes={paginatedRecipes} />
      <Pagination
        totalItems={recipes.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Recipes;
