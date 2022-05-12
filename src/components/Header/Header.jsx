import React from 'react';

import './Header.scss';

function Header() {
  return (
    <ul className="header_tabs">
      <li className="header_tab">Search</li>
      <li className="header_tab">Rated</li>
    </ul>
  );
}

export default Header;
