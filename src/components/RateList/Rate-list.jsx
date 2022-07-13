import React from 'react';
import PropTypes from 'prop-types';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import Item from '../Item';
import Pages from '../Pages';
import Spiner from '../Spin';
import Counts from '../Counts';

import './Rate-list.scss';

function RateList(props) {
  const { page, changeRatePage, ratedMovies, isLoaded, error } = props;
  const {
    results: cards = [],
    total_pages: pages,
    total_results: results,
  } = ratedMovies;

  const moviesList = cards.map((item) => {
    item.load = isLoaded;
    return (
      <li key={`${item.id}-super-key`} className='movie_item'>
        <Item item={item} />
      </li>
    );
  });
  return (
    <>
      <Offline>
        <div className='network-e'>
          Internet connection problem, please check your network connection
        </div>
      </Offline>
      <Counts pages={pages} results={results} page={page} />
      {cards.length === 0 ? (
        <div>Нет оценённых фильмов, воспользуйтесь поиском</div>
      ) : null}
      {isLoaded && cards.length === 0 ? <Spiner /> : null}
      {error ? (
        <Alert
          message={`${error}`}
          description='Ошибка получения данных с сервера'
          type='error'
          closable
        />
      ) : (
        <ul className='items_container'>{moviesList}</ul>
      )}
      {moviesList.length === 0 ? null : (
        <Pages pages={pages} changePage={changeRatePage} />
      )}
    </>
  );
}

RateList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
  search: PropTypes.string,
  genres: PropTypes.array,
  changeRatePage: PropTypes.func,
  ratedMovies: PropTypes.object,
  isLoaded: PropTypes.bool,
  error: PropTypes.any,
};

export default RateList;
