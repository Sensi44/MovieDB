import React, { useEffect, useState } from 'react';

import { Tabs } from 'antd';
import ItemList from '../Item-list';
import Search from '../Search';
// import ForTest from '../ForTest';
import { getGenres } from '../../Services/service';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(' ');
  const [genres, setGenres] = useState([]);
  const { TabPane } = Tabs;

  const changePage = (num) => setPage(num);
  const changeSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    getGenres()
      .then((g) => {
        setGenres(g.genres);
      });
  }, []);
  console.log(genres);

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered size="large" >
        <TabPane tab="Search" key="1">
          <Search num={3} num2={2} changeSearch={changeSearch} />
          <ItemList page={page} search={search} genres={genres} changePage={changePage}/>
        </TabPane>
        { console.log('render app') }
        <TabPane tab="Rated" key="2">
          <div>rated</div>
          <ItemList page={page} search={search}/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
