import { Recipe } from '../../types';
import {
  formatIngredients,
  formatInstructionText,
  getYouTubeEmbedUrl,
} from '../../utils';

import { Loader } from '../loader';
import {
  BottomWrapper,
  HeartIcon,
  Image,
  InfoBlock,
  ProductsWrapper,
  SourceWrapper,
  Subtitle,
  Title,
  TitleWrapper,
  VideoWrapper,
  Wrapper,
} from './recipeData.styled';

interface RecipeDataProps {
  recipe: Recipe;
  isSelected: boolean;
  handleHeartClick: () => void;
}

export const RecipeData = ({
  recipe,
  isSelected,
  handleHeartClick,
}: RecipeDataProps) => {
  if (!recipe) return <Loader />;
  const youtubeEmbedUrl = getYouTubeEmbedUrl(recipe.strYoutube);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{recipe.strMeal}</Title>
        <HeartIcon onClick={handleHeartClick} isSelected={isSelected} />
      </TitleWrapper>
      <InfoBlock>
        <Image src={recipe.strMealThumb} alt={recipe.strMeal} />

        <ProductsWrapper>
          <Subtitle>Ingredients:</Subtitle>
          <ul>{formatIngredients(recipe)}</ul>
        </ProductsWrapper>
      </InfoBlock>

      <BottomWrapper>
        <p>
          <strong>Cuisine:</strong> {recipe.strArea}
        </p>
        <p>
          <strong>Category:</strong> {recipe.strCategory}
        </p>
      </BottomWrapper>

      <Subtitle>Instructions:</Subtitle>
      {formatInstructionText(recipe.strInstructions)}
      {youtubeEmbedUrl && (
        <VideoWrapper>
          <Subtitle>Watch Video</Subtitle>
          <iframe
            width="100%"
            height="315"
            src={youtubeEmbedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      )}
      <SourceWrapper>
        <Subtitle>Source:</Subtitle>
        <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
          {recipe.strSource}
        </a>
      </SourceWrapper>
    </Wrapper>
  );
};
