import React from 'react';
import PropTypes from 'prop-types';

function Counts(props) {
  const { pages, results, page } = props;
  return (
    <>
      {results ? (
        <div className='counts'>
          <span>Всего: </span>
          {results}&nbsp;&nbsp;&nbsp;
          <span>Страниц: </span>
          {pages}&nbsp;&nbsp;&nbsp;
          <span>Текущая страница: </span>
          {page}
        </div>
      ) : null}
    </>
  );
}

Counts.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  results: PropTypes.number,
};

export default Counts;
