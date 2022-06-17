import React, { useState } from 'react';

import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);

  const changePage = (num) => setPage(num);
  const getPages = (p) => setPages(p);

  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList page={page} getPages={getPages}/>
      <Pages changePage={changePage} pages={pages}/>
    </div>
  );
}

export default App;
