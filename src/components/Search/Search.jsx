import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { debounce } from '../../Services/service';

import './Search.scss';

// eslint-disable-next-line react/prop-types
function Search({ changeSearch }) {
  // eslint-disable-next-line no-unused-vars
  const [label, setLabel] = useState('');

  // function handleChange(e) {
  //   console.log(e.target.value);
  //   const temp = e.target.value;
  //   setLabel(e.target.value);
  //   changeSearch(temp === '' ? ' ' : temp);
  // }

  const handleToggle = debounce((e) => {
    const temp = e.target.value;
    // setLabel(e.target.value);
    changeSearch(temp === '' ? ' ' : temp);
  }, 400);

  return (
    <div className="search_container">
      <input
        className="search_input"
        type="text" placeholder="Type to search..."
        onChange={handleToggle}
      />
    </div>
  );
}

export default Search;
