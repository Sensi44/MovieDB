import React from 'react';

import './Search.scss';

// eslint-disable-next-line react/prop-types
function Search() {
  return (
    <div className="search_container">
      <input className="search_input" type="text" placeholder="Type to search..."/>
    </div>
  );
}

export default Search;
