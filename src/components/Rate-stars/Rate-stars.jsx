import React from 'react';
import { Rate } from 'antd';

import './Rate-stars.scss';

function RateStars(props) {
  // eslint-disable-next-line react/prop-types
  const { voteAverage } = props;
  return (
   <><Rate allowHalf defaultValue={voteAverage} count = {10} /></>
  );
}

export default RateStars;
