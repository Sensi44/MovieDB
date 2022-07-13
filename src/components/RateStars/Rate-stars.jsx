import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import cookie from 'cookie_js';

import { rateMovie } from '../../Api';

import './Rate-stars.scss';

function RateStars(props) {
  const { rating, id } = props;
  const token = cookie.get('guest_session_id');
  const test = (e) => {
    rateMovie(id, e, token);
  };

  return (
    <>
      <Rate allowHalf defaultValue={rating} onChange={test} count={10} />
    </>
  );
}

RateStars.propTypes = {
  rating: PropTypes.number,
  id: PropTypes.number,
};

export default RateStars;
