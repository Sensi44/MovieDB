import React, { useState, useEffect } from 'react';

import { searchMovies, dateCorrector } from '../../Services/service';
import './Item-list.scss';
import Item from '../Item';

function ItemList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getMovies = () => searchMovies();

    getMovies().then(
      (search) => {
        setIsLoaded(true);
        setItems(search.results);
      },
      (err) => {
        setIsLoaded(true);
        setError(err);
      }
    );
  }, []);

  console.log(items);

  const moviesList = items.map((item) => {
    const {
      genre_ids: genres,
      id, title, overview,
      vote_average: voteAverage,
      poster_path: posterPath,
      release_date: date,
    } = item;

    return (
      <li key={`${id}-super-key`} className='ggg'>
        <Item
          title={title}
          id={id}
          overview={overview}
          genres={genres}
          voteAverage={voteAverage}
          posterPath={posterPath}
          date={dateCorrector(date)}
        />
      </li>
    );
  });

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  return <ul className='items_container'>{moviesList}</ul>;
}

export default ItemList;
