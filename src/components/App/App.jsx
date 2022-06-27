import React, { useEffect, useState } from 'react';

import { Tabs } from 'antd';
import ItemList from '../Item-list';
import Search from '../Search';
import { DataProvider } from '../Context/DataContext';
import { getGenres, getRatedMovies } from '../../Services/service';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(' ');
  const [genres, setGenres] = useState([]);
  const [ratedMovies, setRatedItems] = useState([]);
  const { TabPane } = Tabs;

  const changePage = (num) => setPage(num);
  const changeSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    getRatedMovies()
      .then((r) => {
        setRatedItems(r.results);
      });
    getGenres()
      .then((g) => {
        setGenres(g.genres);
      });
  }, []);

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered size="large" >
        <TabPane tab="Search" key="1">
          <Search num={3} num2={2} changeSearch={changeSearch} />
          <DataProvider genres={genres}>
            <ItemList page={page} search={search} ratedMovies={ratedMovies} changePage={changePage}/>
          </DataProvider>
        </TabPane>

        { console.log('render app') }
        <TabPane tab="Rated" key="2">
          <div>rated</div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
