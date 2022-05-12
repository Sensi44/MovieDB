import React from 'react';

import './Item.scss';

function Item() {
  return (
    <div className="movie_item">
      <div className="item_left">
        <img src="#" alt=""/>
      </div>

      <div className="item_right">
        <h3>Название фильма</h3>

        <data className="item_data">5ое марта 2020</data>

        <ul className="item_genre">
          <li>Action</li>
          <li>Drama</li>
        </ul>

        <div className="item_text">
          Lorem ipsum
        </div>

        <div className="item_stars">
          <span className="item_star">123</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
