import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchMovies, dateCorrector } from '../../Services/service';
import Item from '../Item';
import Counts from '../Counts';

import './Item-list.scss';

/** @namespace search.total_pages * */
/** @namespace search.total_results * */

function ItemList(props) {
  const { page, getPages } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);
  const [pages, setPages] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Управление запросом
    setIsLoaded(true);
    setError(null);
    searchMovies('Harry', page)
      .then(
        (search) => {
          // Появляются дополнительные ререндеры при записи в разные стэйты
          setItems(search.results);
          setPages(search.total_pages);
          setResults(search.total_results);
          getPages(search.total_pages);
        },
        (err) => {
          console.log(`${err} ВОТ ЖЕ ВОТ`);
          setError(err);
        }
      )
      .catch((serverError) => {
        console.log(serverError);
        setError(serverError);
      })
      .finally(() => {
        setIsLoaded(false);
      });
  }, [page]);

  console.log(items);

  const moviesList = items.map((item) => {
    const { genre_ids: genres, id, title, overview,
      vote_average: voteAverage, poster_path: posterPath, release_date: date,
    } = item;

    return (
      <li key={`${id}-super-key`} className='movie_item'>
        <Item title={title} id={id} overview={overview}
              genres={genres} voteAverage={voteAverage}
              posterPath={posterPath} date={dateCorrector(date)}
              load={isLoaded} />
      </li>
    );
  });

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  // if (isLoaded) return <Spiner />;
  return (
    <>
      <Counts pages={pages} results={results} />
      <ul className='items_container'>{moviesList}</ul>
    </>
  );
}

ItemList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
};

export default ItemList;
