import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import cookie from 'cookie_js';

import ItemList from '../ItemList';
import Search from '../Search';
import RateList from '../RateList';
import { DataProvider } from '../DataContext';
import { getGenres, getRatedMovies, getGuestSessionId } from '../../Api';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [ratePage, setRatePage] = useState(1);
  const [search, setSearch] = useState(' ');
  const [genres, setGenres] = useState([]);
  const [ratedMovies, setRatedItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const { TabPane } = Tabs;

  const changePage = (num) => setPage(num);
  const changeRatePage = (num) => setRatePage(num);
  const changeSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    if (!cookie.get('guest_session_id')) {
      getGuestSessionId().then((res) => {
        cookie.set('guest_session_id', res.guest_session_id, { expires: 31 });
      });
    }
  }, []);

  useEffect(() => {
    getGenres().then((g) => {
      setGenres(g.genres);
    });
  }, []);

  useEffect(() => {
    getRatedMovies(cookie.get('guest_session_id'), ratePage).then((r) => {
      setRatedItems(r);
    });
  }, [ratePage]);

  const changeTab = (e) => {
    if (e === 'rate') {
      setIsLoaded(true);
      setError(null);
      getRatedMovies(cookie.get('guest_session_id'), ratePage)
        .then(
          (r) => {
            setRatedItems(r);
          },
          (err) => setError(err)
        )
        .catch((serverError) => setError(serverError))
        .finally(() => {
          setIsLoaded(false);
        });
    }
  };

  return (
    <div className='container'>
      <Tabs defaultActiveKey='1' onChange={changeTab} centered size='large'>
        <TabPane tab='Search' key='search'>
          <Search num={3} num2={2} changeSearch={changeSearch} />
          <DataProvider genres={genres}>
            <ItemList
              page={page}
              search={search}
              ratedMovies={ratedMovies.results}
              changePage={changePage}
            />
          </DataProvider>
        </TabPane>

        <TabPane tab='Rated' key='rate'>
          <DataProvider genres={genres}>
            <RateList
              ratedMovies={ratedMovies}
              changeRatePage={changeRatePage}
              page={ratePage}
              isLoaded={isLoaded}
              error={error}
            />
          </DataProvider>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
