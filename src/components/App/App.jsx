import React, { useEffect, useState } from 'react';

import { Tabs } from 'antd';
import cookie from 'cookie_js';
import ItemList from '../Item-list';
import Search from '../Search';
import RateList from '../Rate-list';
import { DataProvider } from '../Context/DataContext';
import { getGenres, getRatedMovies, getGuestSessionId } from '../../Services/service';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(' ');
  const [genres, setGenres] = useState([]);
  const [ratedMovies, setRatedItems] = useState({});
  const { TabPane } = Tabs;

  const changePage = (num) => setPage(num);
  const changeSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    getRatedMovies(cookie.get('guest_session_id'), 1).then((r) => {
      setRatedItems(r);
    });
    console.log(ratedMovies);
    getGenres().then((g) => {
      setGenres(g.genres);
    });
  }, []);

  // Эффект который будет срабатывать при оценке фильма, чтобы тот сразу на rated добавлялся
  // useEffect(() => {
  //   getRatedMovies(cookie.get('guest_session_id'), 1).then((r) => {
  //     setRatedItems(r);
  //   });
  // }, [ratedMovies]);

  // Запрос новой гостевой сессии если в куки ничего нет
  useEffect(() => {
    if (!cookie.get('guest_session_id')) {
      getGuestSessionId()
        .then((res) => cookie.set('guest_session_id', res.guest_session_id, { expires: 31 }));
    }
  }, []);

  const changeTab = (e) => {
    if (e === 'rate') {
      getRatedMovies(cookie.get('guest_session_id'), 1).then((r) => {
        setRatedItems(r);
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

        {console.log('render app')}
        <TabPane tab='Rated' key='rate'>
          <DataProvider genres={genres}>
            <RateList ratedMovies={ratedMovies} />
          </DataProvider>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
