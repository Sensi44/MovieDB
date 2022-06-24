import React from 'react';
import PropTypes from 'prop-types';

function Counts(props) {
  const { pages, results } = props;
  return (
    <>
      {results ? (
        <div className="counts">
          <span>Фильмов найдено: </span>
          {results} &nbsp;&nbsp;&nbsp; <span>Страниц: </span>
          {pages}
        </div>
      ) : null}
    </>
  );
}

Counts.propTypes = {
  pages: PropTypes.number,
  results: PropTypes.number,
};

export default Counts;
