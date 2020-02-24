// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import RepoResults from '../RepoResults';
// import Message from '../Message';
import HeaderIcon from '../Header';
import DarkModeToggle from '../DarkModeToggle';
import PageIndexButton from '../PageIndexButton';

// == Composant
const App = () => {
  const [repos, setRepos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchValue, setSearchValue] = useState('javascript');
  const [darkMode, setDarkMode] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchRepos = async () => {
    setIsFetching(true);

    const response = await axios.get(
      `https://api.github.com/search/repositories?q='${searchValue}'&client_id="7d00925637315010faa6"&client_secret="72659ba871c4569e0d2256441a2278e2ba7f11aa"&sort=stars&order=desc&page=${pageIndex}&per_page=9`
    );
    setRepos(response.data.items);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchRepos();
  }, [searchValue, pageIndex]);

  const handleInputChange = e => setSearchValue(e.currentTarget.value);

  const handleSubmit = () => {
    fetchRepos();
  };

  const nextPage = () => setPageIndex(pageIndex + 1);
  const previousPage = () => setPageIndex(pageIndex - 1);

  return (
    <div className='app'>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeaderIcon isDark={darkMode} />

      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isDark={darkMode}
      />
      <RepoResults repos={repos} isFetching={isFetching} />
      <PageIndexButton setPageIndex={previousPage} label='Previous' />
      <PageIndexButton setPageIndex={nextPage} label='Next' isNext />
    </div>
  );
};

// == Export
export default App;
