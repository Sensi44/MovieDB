import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { truncate, dateCorrector, setGenres } from '../../Services/service';
import RateStars from '../Rate-stars';
import Img from './Img';
import Spiner from '../Spin';
import image from '../../img/no-image.jpg';
import { GenresContext } from '../Context/DataContext';

import './Item.scss';

function Item(props) {
  const { genre_ids: genres, title, overview, load, vote_average: voteAverage,
    poster_path: posterPath, release_date: date } = props.item;
  const genresList = useContext(GenresContext);

  const spinner = load ? <Spiner/> : null;
  const img = !load ? <Img posterPath={posterPath} title={title} /> : null;
  const errorImg = (posterPath === null)
    ? <img className="no-image" src={image} alt="Нет доступных изображений"/> : null;
  const hasData = !(load || errorImg);

  return (
    <div className='movie_item'>
      <div className='item_left'>
        { errorImg || spinner }
        { hasData ? img : null}
      </div>
      <div className='item_right'>
        <div className='item_top'>
          <h5 title={(title.length >= 32) ? title : null}>{truncate(title, 60)}</h5>
          <div className='item_rating'>{voteAverage}</div>
        </div>

        <data className='item_data'>{dateCorrector(date)}</data>

        <ul className='item_genres'>
          {setGenres(genresList, genres).map((genre) => <li key={genre} className='item_genre'>{genre}</li>)}
        </ul>

        <div className='item_text'>
          {truncate(overview, 105)}
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
  genresList: PropTypes.array,
};

export default Item;
