import React, { useState } from 'react';

import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';
// import ForTest from '../ForTest';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [search, setSearch] = useState(' ');

  const changePage = (num) => setPage(num);
  const getPages = (p) => setPages(p);
  const changeSearch = (str) => {
    setSearch(str);
  };

  return (
    <div className="container">
      <Header />
      <Search num={3} num2={2} changeSearch={changeSearch} />
      <ItemList page={page} getPages={getPages} search={search}/>
      <Pages changePage={changePage} pages={pages}/>
    </div>
  );
}

export default App;
