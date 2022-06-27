import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import './Rate-stars.scss';

function RateStars(props) {
  const { voteAverage } = props;

  const test = (e) => {
    console.log(e);
    // Текущая кликнутая звезда
  };

  return (
   <>
     <Rate allowHalf defaultValue={ voteAverage } onChange={test} count = {10} />
     </>
  );
}

RateStars.propTypes = {
  voteAverage: PropTypes.number,
};

export default RateStars;
