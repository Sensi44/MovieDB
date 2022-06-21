import React, { useState } from 'react';

import './Search.scss';

// eslint-disable-next-line react/prop-types
function Search({ changeSearch }) {
  const [label, setLabel] = useState('');

  function handleChange(e) {
    const temp = e.target.value;
    setLabel(e.target.value);
    changeSearch(temp === '' ? ' ' : temp);
  }

  return (
    <div className="search_container">
      <input
        className="search_input"
        type="text" placeholder="Type to search..."
        onChange={handleChange}
        value={label}
      />
    </div>
  );
}

export default Search;
