import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import './Rate-stars.scss';

function RateStars(props) {
  const { voteAverage } = props;
  return (
   <><Rate allowHalf defaultValue={voteAverage} count = {10} /></>
  );
}

RateStars.propTypes = {
  voteAverage: PropTypes.number,
};

export default RateStars;
