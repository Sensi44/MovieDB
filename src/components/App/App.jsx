import React from 'react';
import Services from '../../Services';
import Header from '../Header';
import ItemList from '../Item-list';
import Search from '../Search';
import Item from '../Item';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList />
      <Item/>
      <br/>
      <Services />
    </div>
  );
}

export default App;
