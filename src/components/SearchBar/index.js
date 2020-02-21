import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({ handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} action=''>
      <Input
        className='searchbar'
        type='text'
        icon='search'
        placeholder='search'
        size='huge'
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
