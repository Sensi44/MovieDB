import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchMovies } from '../../Services/service';
import Item from '../Item';
import Error from '../Item/Error';
import Spiner from '../Spin';
// import Counts from '../Counts';

import './Item-list.scss';

/** @namespace search.total_pages * */
/** @namespace search.total_results * */

function ItemList(props) {
  // eslint-disable-next-line no-unused-vars
  const { page, getPages } = props;

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [pages, setPages] = useState([]);
  // const [results, setResults] = useState([]);

  useEffect(() => {
    // Управление запросом
    setIsLoaded(true);
    setError(null);
    searchMovies('Harry', page)
      .then(
        (search) => {
          // Появляются дополнительные ререндеры при записи в разные стэйты
          setItems(search.results);
          // setPages(search.total_pages);
          // setResults(search.total_results);
          getPages(search.total_pages);
        },
        (err) => setError(err)
      )
      .catch((serverError) => setError(serverError))
      .finally(() => {
        setIsLoaded(false);
        console.log(items);
      });
  }, [page]);

  console.log('render', Date.now(), items, items[0]);

  const moviesList = items.map((item) => {
    item.load = isLoaded;
    return (
      <li key={`${item.id}-super-key`} className='movie_item'>
        <Item item={item} />
      </li>
    );
  });

  return (
    <>
      { /* <Counts pages={pages} results={results} /> */ }
      { error ? <Error img={`${error}`}/> : null }
      { isLoaded ? <Spiner /> : null }
      { error ? null : <ul className='items_container'>{moviesList}</ul> }
    </>
  );
}

ItemList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
};

export default ItemList;
