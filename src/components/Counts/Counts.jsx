import React from 'react';

function Counts(props) {
  // eslint-disable-next-line react/prop-types
  const { pages, results } = props;
  return (
      <>
       <div><span>Фильмов: </span>{results}   <span>Страниц: </span>{pages}</div>
      </>
  );
}

export default Counts;
