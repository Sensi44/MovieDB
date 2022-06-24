import React, { useState } from 'react';

import { Tabs } from 'antd';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';
// import ForTest from '../ForTest';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState(' ');
  const { TabPane } = Tabs;

  const changePage = (num) => setPage(num);
  const getPages = (p) => setPages(p);
  const changeSearch = (str) => {
    setSearch(str);
  };

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered size="large" >
        <TabPane tab="Search" key="1">
          <Search num={3} num2={2} changeSearch={changeSearch} />
          <ItemList page={page} getPages={getPages} search={search}/>
          <Pages changePage={changePage} pages={pages}/>
        </TabPane>
        {console.log('render app')}
        <TabPane tab="Rated" key="2">
          <div>rated</div>
          <ItemList page={page} getPages={getPages} search={search}/>
        </TabPane>
      </Tabs>

    </div>
  );
}

export default App;
