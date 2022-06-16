import React, { useState } from 'react';

import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';

import './App.scss';

function App() {
  const [page, setPage] = useState(1);

  const changePage = (num) => setPage(num);

  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList page={page}/>
      <Pages changePage={changePage}/>
    </div>
  );
}

export default App;
