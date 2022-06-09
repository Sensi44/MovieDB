// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { truncate } from '../../Services/service';
import './Item.scss';

function Item(props) {
  // eslint-disable-next-line camelcase,react/prop-types,no-unused-vars
  let { genres, id, title, overview, voteAverage, posterPath } = props;

  overview = truncate(overview, 25);

  return (
    <div className='movie_item'>
      <div className='item_left'>
        <img className='item_img' src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      </div>

      <div className='item_right'>
        <div className='item_top'>
          <h5>{title}</h5>
          {/* eslint-disable-next-line camelcase */}
          <div className='item_rating'>{voteAverage}</div>
        </div>

        <data className='item_data'>March 5, 2029</data>

        <ul className='item_genres'>
          <li className='item_genre'>Action</li>
          <li className='item_genre'>Drama</li>
        </ul>

        <div className='item_text'>
          {overview}
        </div>

        <div className='item_stars'>
          <span className='item_star'>123</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
