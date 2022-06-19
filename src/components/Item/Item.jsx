import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { truncate } from '../../Services/service';
import RateStars from '../Rate-stars';
import Img from './Img';
import Spiner from '../Spin';
import Error from './Error';

import './Item.scss';

function Item(props) {
  let { genres, title, overview, voteAverage, posterPath, date, load } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(load);
    if (posterPath === null) {
      setError(true);
    }
  }, [load]);

  overview = truncate(overview, 140);

  const spinner = loading ? <Spiner/> : null;
  const img = !loading ? <Img posterPath={posterPath} title={title} /> : null;
  const errorImg = error ? <Error img={'Невозможно загрузить изображение'}/> : null;
  const hasData = !(loading || error);

  return (
    <div className='movie_item'>
      <div className='item_left'>
        { error ? errorImg : spinner }
        { hasData ? img : null}
      </div>

      <div className='item_right'>
        <div className='item_top'>
          <h5>{title}</h5>
          <div className='item_rating'>{voteAverage}</div>
        </div>

        <data className='item_data'>{date}</data>

        <ul className='item_genres'>
          <li className='item_genre'>Action</li>
          <li className='item_genre'>Drama</li>
          <li className='item_genre'>{genres}</li>
        </ul>

        <div className='item_text'>
          {overview}
        </div>

        <div className='item_stars'>
          <RateStars voteAverage = {voteAverage}/>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  genres: PropTypes.array,
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  voteAverage: PropTypes.number,
  posterPath: PropTypes.string,
  date: PropTypes.string,
  load: PropTypes.bool,
};

export default Item;
