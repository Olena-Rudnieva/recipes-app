import { useState } from 'react';
import debounce from 'lodash.debounce';
import { StyledInput } from './search.styled';

interface SearchProps {
  onSearch: (term: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = debounce((term: string) => {
    onSearch(term);
  }, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <StyledInput
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};
