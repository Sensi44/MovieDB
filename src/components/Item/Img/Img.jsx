// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Img(props) {
  // eslint-disable-next-line react/prop-types
  const { posterPath, title } = props;
  return (
    <>
      <img className='item_img' src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
    </>
  );
}

export default Img;
