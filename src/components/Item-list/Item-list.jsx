import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchMovies, dateCorrector } from '../../Services/service';
import Item from '../Item';
import Spiner from '../Spin';
import Counts from '../Counts';

import './Item-list.scss';

function ItemList(props) {
  const { page } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Управление запросом
    const getMovies = () => searchMovies('Harry', page);
    setIsLoaded(false);
    getMovies().then(
      (search) => {
        setIsLoaded(true);
        setItems(search.results);
        setPages(search.total_pages);
        setResults(search.total_results);
      },
      (err) => {
        console.log(`${err} ВОТ ЖЕ ВОТ`);
        setIsLoaded(true);
        setError(err);
      }
    );
  }, [page]);

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
          load={isLoaded}
        />
      </li>
    );
  });

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } if (!isLoaded) {
    return <Spiner />;
  }
  return (
    <>
      <Counts pages={pages} results={results} />
      <ul className='items_container'>{moviesList}</ul>
    </>
  );
}

ItemList.propTypes = {
  page: PropTypes.number,
};

export default ItemList;
