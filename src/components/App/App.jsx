import React from 'react';
// eslint-disable-next-line no-unused-vars
import Services from '../../Services';

import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Pages from '../Pages';
import TestComponent from '../TestComponent';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList />
      <Pages />
      <TestComponent />
    </div>
  );
}

export default App;
