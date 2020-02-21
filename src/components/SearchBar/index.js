import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <Input
      className='searchbar'
      type='text'
      icon='search'
      placeholder='search'
    />
  );
};

export default SearchBar;
