// == Import npm
import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import PropTypes from 'prop-types';
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
  const [isFetching, setIsFetching] = useState(false);
  const [searchValue, setSearchValue] = useState('javascript');

  const fetchRepos = async () => {
    setIsFetching(true);
    const response = await axios.get(
      `https://api.github.com/search/repositories?q="${searchValue}"&client_id="7d00925637315010faa6"&client_secret="72659ba871c4569e0d2256441a2278e2ba7f11aa"`
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
      <HeaderIcon />
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <RepoResults repos={repos} isFetching={isFetching} />
    </div>
  );
};

App.propTypes = {
  id: PropTypes.number,
};
// == Export
export default App;
