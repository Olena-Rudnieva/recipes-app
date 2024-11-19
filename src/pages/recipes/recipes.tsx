import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Container, RecipesList } from '../../components';
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
      <RecipesList recipes={recipes} />
    </Container>
  );
};

export default Recipes;
