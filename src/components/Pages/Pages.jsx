import React from 'react';

import './Pages.scss';

function Pages() {
  return (
    <div className="pages_container">
      <span className="arrow_left" />
      <ul className='pages'>
        <li className='pages_numb'>1</li>
        <li className='pages_numb pages_active'>2</li>
        <li className='pages_numb'>3</li>
        <li className='pages_numb'>4</li>
        <li className='pages_numb'>5</li>
      </ul>
      <span className="arrow_right" />
    </div>
  );
}

export default Pages;
