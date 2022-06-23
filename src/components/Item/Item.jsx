import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { truncate, dateCorrector } from '../../Services/service';
import RateStars from '../Rate-stars';
import Img from './Img';
import Spiner from '../Spin';
import Error from './Error';

import './Item.scss';

function Item(props) {
  const { genre_ids: genres, title, overview, load, vote_average: voteAverage,
    poster_path: posterPath, release_date: date } = props.item;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(load);
    if (posterPath === null) {
      setError(true);
    }
  }, [load, posterPath]);

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

        <data className='item_data'>{dateCorrector(date)}</data>

        <ul className='item_genres'>
          <li className='item_genre'>Action</li>
          <li className='item_genre'>Drama</li>
          <li className='item_genre'>{genres}</li>
        </ul>

        <div className='item_text'>
          {truncate(overview, 140)}
        </div>

        <div className='item_stars'>
          <RateStars voteAverage = {voteAverage}/>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
