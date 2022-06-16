import React, { useState } from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

import './Pages.scss';

function Pages(props) {
  const { changePage } = props;
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    setCurrent(page);
    changePage(page);
  };

  return (
    <div className='pages_container'>
      <div className='pages'>
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </div>
  );
}

Pages.defaultProps = {

};

Pages.propTypes = {
  changePage: PropTypes.func,
};

export default Pages;
