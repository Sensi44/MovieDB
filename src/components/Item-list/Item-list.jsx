import React, { useState, useEffect, useRef } from 'react';
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
  const refResults = useRef(items.results);
  const refPage = useRef(1);
  const tr = 'total_results';
  const tp = 'total_pages';

  useEffect(() => {
    setIsLoaded(true);
    setError(null);
    searchMovies(search, page)
      .then(
        (searchRes) => {
          // console.log(`Поиск - ${searchRes[tr]}`, `::: Реф - ${refResults.current}`);
          // console.log(`Страница - ${searchRes.page}`, `::: Реф - ${refPage.current}`);
          if (refResults.current !== searchRes[tr]
          || refPage.current !== searchRes.page) {
            setItems((prevState) => ({
              ...prevState,
              items: searchRes.results,
              pages: searchRes[tp],
              results: searchRes[tr],
            }));
            getPages(searchRes[tp]);
          }
          refResults.current = searchRes[tr];
          refPage.current = searchRes.page;
        },
        (err) => setError(err)
      )
      .catch((serverError) => setError(serverError))
      .finally(() => {
        setIsLoaded(false);
      });
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
      {console.log('render', 'item-list', items)}
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
