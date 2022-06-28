import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Offline } from 'react-detect-offline';
import { getRate } from '../../Services/service';
import Item from '../Item';
import Pages from '../Pages';
import Error from '../Item/Error';
import Spiner from '../Spin';
import Counts from '../Counts';

import './Rate-list.scss';

function RateList(props) {
  const { page, changePage, ratedMovies } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log(ratedMovies);

  const { results: cards, total_pages: pages, total_results: results } = ratedMovies;
  const moviesList = cards.map((item) => {
    item.load = isLoaded;
    return (
      <li key={`${item.id}-super-key`} className='movie_item'>
        <Item item={item}/>
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
      <Counts pages={pages} results={results} page={page}/>
      {cards.length === 0 ? <div>Нет оценённых фильмов, воспользуйтесь поиском</div> : null}
      {(isLoaded && cards.length === 0) ? <Spiner /> : null}
      {error ? (
        <Error img={`${error}`} />
      ) : (
        <ul className='items_container'>{moviesList}</ul>
      )}
    </>
  );
}

RateList.propTypes = {
  page: PropTypes.number,
  getPages: PropTypes.func,
  search: PropTypes.string,
  genres: PropTypes.array,
  changePage: PropTypes.func,
  ratedMovies: PropTypes.object,
};

export default RateList;
