import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchMovies } from '../../Services/service';
import Item from '../Item';
import Error from '../Item/Error';
import Spiner from '../Spin';
import Counts from '../Counts';

import './Item-list.scss';

/** @namespace search.total_pages * */
/** @namespace search.total_results * */

function ItemList(props) {
  const { page, getPages, search } = props;

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [onLine, setOnline] = useState(true);
  const [pages, setPages] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    window.addEventListener('online', () => {
      setOnline(true);
    });
    window.addEventListener('offline', () => {
      setOnline(false);
    });
    return () => {
      window.addEventListener('online', () => {
        setOnline(true);
      });
      window.addEventListener('offline', () => {
        setOnline(false);
      });
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    setError(null);
    searchMovies(search, page)
      .then(
        (searchRes) => {
          setItems(searchRes.results);
          setPages(searchRes.total_pages);
          setResults(searchRes.total_results);
          getPages(searchRes.total_pages);
        },
        (err) => setError(err)
      )
      .catch((serverError) => setError(serverError))
      .finally(() => {
        setIsLoaded(false);
      });
  }, [page, search]);

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
      {!onLine
        ? <div className="network-e">Internet connection problem,
          please check your network connection</div>
        : null }
      <Counts pages={pages} results={results} />
      {items.length === 0 ? <div>Ничего не найдено, введите запрос</div> : null}
      { isLoaded ? <Spiner /> : null }
      { error ? <Error img={`${error}`}/> : <ul className='items_container'>{moviesList}</ul> }
    </>
  );
}

ItemList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
  search: PropTypes.string,
};

export default ItemList;
