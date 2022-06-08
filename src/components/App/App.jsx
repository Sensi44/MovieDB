import React from 'react';

import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';
// import MovieApi from '../MovieApi';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList />
      <Pages />
    </div>
  );
}

export default App;
