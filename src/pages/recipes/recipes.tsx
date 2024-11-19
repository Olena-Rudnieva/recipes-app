import Select from 'react-select';
import { Container, Pagination, RecipesList, Search } from '../../components';
import {
  BlockWrapper,
  customStyles,
  StyledWrapper,
  Text,
  Title,
  Wrapper,
} from './recipes.styled';
import { useRecipes } from './hooks';

const Recipes = () => {
  const {
    recipes,
    selectedCategory,
    currentPage,
    itemsPerPage,
    categoryOptions,
    paginatedRecipes,
    handleCategoryChange,
    handlePageChange,
    handleSearch,
  } = useRecipes();

  return (
    <Wrapper>
      <Container>
        <Title>Recipes</Title>
        <BlockWrapper>
          <StyledWrapper>
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
          </StyledWrapper>
          <StyledWrapper>
            <Search onSearch={handleSearch} />
          </StyledWrapper>
        </BlockWrapper>
        {!recipes.length && <Text>No recipes found</Text>}
        <RecipesList recipes={paginatedRecipes} />
        <Pagination
          totalItems={recipes.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Container>
    </Wrapper>
  );
};

export default Recipes;
