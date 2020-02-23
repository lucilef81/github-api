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
import NextPageButton from '../NextPageButton';

// == Composant
const App = () => {
  const [repos, setRepos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchValue, setSearchValue] = useState('javascript');
  const [darkMode, setDarkMode] = useState(false);
  const [nextPage, setNextPage] = useState([]);

  const fetchRepos = async () => {
    setIsFetching(true);
    const response = await axios.get(
      `https://api.github.com/search/repositories?q="${searchValue}"&client_id="7d00925637315010faa6"&client_secret="72659ba871c4569e0d2256441a2278e2ba7f11aa"&sort=stars&order=desc&page=1&per_page=9`
    );
    setRepos(response.data.items);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchRepos();
  }, [searchValue]);

  const handleInputChange = e => setSearchValue(e.currentTarget.value);

  const handleSubmit = () => {
    fetchRepos();
  };

  return (
    <div className='app'>
      <HeaderIcon isDark={darkMode} />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isDark={darkMode}
      />
      <RepoResults repos={repos} isFetching={isFetching} />
      <NextPageButton nextPage={nextPage} />
    </div>
  );
};

App.propTypes = {
  id: PropTypes.number,
};
// == Export
export default App;
