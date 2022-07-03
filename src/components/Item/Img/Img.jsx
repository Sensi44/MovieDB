import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const { posterPath, title } = props;

  return (
    <>
      <img
        className='item_img'
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        title={title}
      />
    </>
  );
}

Img.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
};

export default Img;
