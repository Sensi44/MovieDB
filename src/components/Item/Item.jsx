import React, { useState, useEffect } from 'react';

import { getPeople } from '../../Services/service';
import './Item.scss';

function Item() {
  const [todoData, setTodoData] = useState({
    id: 2,
    peopleHeight: null,
    peopleName: null,
  });

  const updatePeople = (id) => {
    const rnd = Math.floor(Math.random() * 10) + 2;
    getPeople(id).then((people) => setTodoData({
      id: rnd,
      peopleHeight: people.height,
      peopleName: people.name,
    }));
  };

  useEffect(() => {
    updatePeople(5);
  }, []);

  const { peopleHeight, peopleName, id } = todoData;

  return (
    <div className='movie_item'>
      <div className='item_left'>
        <img className='item_img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='' />
      </div>

      <div className='item_right'>
        <div className='item_top'>
          <h5>{peopleHeight}</h5>
          <div className='item_rating'>{peopleName}</div>
        </div>

        <data className='item_data'>March 5, 2029</data>

        <ul className='item_genres'>
          <li className='item_genre'>Action</li>
          <li className='item_genre'>Drama</li>
        </ul>

        <div className='item_text'>
          A former basketball all-star, who has lost his wife and family
          foundation in a struggle with addiction attempts to regain his soul
          and salvation by becoming the coach of a disparate ethnically mixed
          high ...
        </div>

        <div className='item_stars'>
          <span className='item_star'>123</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
