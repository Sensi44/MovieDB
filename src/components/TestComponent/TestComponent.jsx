import React, { useState, useEffect } from 'react';

import './TestComponent.scss';

// Получаем данные сервера и отображаем на странице
// Добавлена обработка ошибок

function TestComponent() {
  const [todoData, setTodoData] = useState({
    name: [],
  });

  const apiBase = 'https://swapi.dev/api/';

  const getShip = async (url) => {
    const result = await fetch(`${apiBase}${url}`).then((res) => {
      console.log(res.ok, res.status);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url} nice, received ${res.status}`);
      }
      console.log(res.status);
      return res.json();
    });

    return result;
  };

  const getPeople = async () => {
    const res = await getShip('people/1/');
    console.log(res);
    setTodoData({
      name: res.height,
    });
    return res;
  };

  // Аналог ComponentDidUnmount
  useEffect(() => {
    getShip('starships/9/')
      .then((body) => setTodoData({
        name: body.name,
      }))
      .catch((err) => {
        console.error('(user-error) Could not fetch: ', err);
      });
  }, []);

  const shipName = todoData.name;
  console.log(todoData);

  return (
    <div className='test-component'>
      <p>{shipName}</p>
      <button onClick={getPeople}>Люк я твоя мать</button>
    </div>
  );
}

export default TestComponent;
