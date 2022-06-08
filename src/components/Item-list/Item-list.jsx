import React from 'react';

import './Item-list.scss';
import Item from '../Item';

function ItemList() {
  return (
    <div className="items_container">
      <Item test = {222}/>
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default ItemList;
