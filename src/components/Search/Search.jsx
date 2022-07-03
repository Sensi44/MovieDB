import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import './Search.scss';

function Search({ changeSearch }) {
  const handleToggle = debounce((e) => {
    const temp = e.target.value;
    changeSearch(temp === '' ? ' ' : temp);
  }, 400);

  return (
    <div className='search_container'>
      <label htmlFor='searchInput'>
        <input
          defaultValue=''
          id='searchInput'
          name='searchInput'
          className='search_input'
          type='text'
          placeholder='Type to search...'
          onChange={handleToggle}
        />
      </label>
    </div>
  );
}

Search.propTypes = {
  changeSearch: PropTypes.func,
};

export default Search;
