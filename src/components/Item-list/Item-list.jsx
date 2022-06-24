import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Offline } from 'react-detect-offline';
import { searchMovies } from '../../Services/service';
import Item from '../Item';
import Error from '../Item/Error';
import Spiner from '../Spin';
import Counts from '../Counts';

import './Item-list.scss';

function ItemList(props) {
  const { page, getPages, search } = props;
  const [items, setItems] = useState({ items: [], pages: 0, results: 0 });
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    setError(null);
    searchMovies(search, page)
      .then(
        (searchRes) => {
          setItems((prevState) => ({
            ...prevState,
            items: searchRes.results,
            pages: searchRes.total_pages,
            results: searchRes.total_results,
          }));
          getPages(searchRes.total_pages);
        },
        (err) => setError(err)
      )
      .catch((serverError) => setError(serverError))
      .finally(() => setIsLoaded(false));
  }, [page, search]);

  const moviesList = items.items.map((item) => {
    item.load = isLoaded;
    return (
      <li key={`${item.id}-super-key`} className='movie_item'>
        <Item item={item} />
      </li>
    );
  });

  const { pages, results } = items;
  return (
    <>
      <Offline>
        <div className='network-e'>
        Internet connection problem, please check your network connection
        </div>
      </Offline>
      {console.log('render', 'item-list')}
      <Counts pages={pages} results={results} />
      {items.items.length === 0 ? <div>Ничего не найдено, введите запрос</div> : null}
      {isLoaded ? <Spiner /> : null}
      {error ? (
        <Error img={`${error}`} />
      ) : (
        <ul className='items_container'>{moviesList}</ul>
      )}
    </>
  );
}

ItemList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
  search: PropTypes.string,
};

export default ItemList;
