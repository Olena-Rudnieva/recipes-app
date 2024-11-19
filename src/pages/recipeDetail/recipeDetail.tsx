import { Container, RecipeData } from '../../components';
import { useRecipeDetail } from './hooks';

const RecipeDetail = () => {
  const { recipe, isSelected, handleHeartClick } = useRecipeDetail();

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  return (
    <Container>
      <RecipeData
        recipe={recipe}
        isSelected={isSelected}
        handleHeartClick={handleHeartClick}
      />
    </Container>
  );
};

export default RecipeDetail;
