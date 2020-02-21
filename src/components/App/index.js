// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import RepoResults from '../RepoResults';
// import Message from '../Message';
import HeaderIcon from '../Header';

// == Composant
const App = () => {
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('javascript');
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q="${searchValue}"`
      );
      setRepos(response.data.items);
    })();
  }, [searchValue]);

  return (
    <div className='app'>
      <HeaderIcon />
      <SearchBar setSearchValue={setSearchValue} />
      <RepoResults repos={repos} />
    </div>
  );
};

// == Export
export default App;
