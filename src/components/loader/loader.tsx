import { Watch } from 'react-loader-spinner';
import { LoaderWrapper } from './loader.styled';

export const Loader = () => (
  <LoaderWrapper>
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#D50032"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </LoaderWrapper>
);
