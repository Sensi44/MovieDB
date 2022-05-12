import React from 'react';

import './Item.scss';

function Item() {
  return (
    <div className="movie_item">
      <div className="item_left">
        <img className="item_img" src="#" alt=""/>
      </div>

      <div className="item_right">
        <div className="item_top">
          <h5>The way back</h5>
          <div className="item_rating">6.6</div>
        </div>

        <data className="item_data">March 5, 2029</data>

        <ul className="item_genres">
          <li className="item_genre">Action</li>
          <li className="item_genre">Drama</li>
        </ul>

        <div className="item_text">
          A former basketball all-star,
          who has lost his wife and family
          foundation in a struggle with
          addiction attempts to regain his
          soul and salvation by becoming
          the coach of a disparate ethnically mixed high ...
        </div>

        <div className="item_stars">
          <span className="item_star">123</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
