import React from 'react';

export default function Services() {
  const apiBase = 'https://swapi.dev/api';

  const getResourse = async (url) => {
    const res = await fetch(`${apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  const getAllPeople = async () => {
    const res = await getResourse('/people/');
    return res.results;
  };
  const getPerson = (id) => getResourse(`/people/${id}`);

  getPerson(3)
    .then((r) => {
      console.log(r);
    });

  getAllPeople()
    .then((people) => {
      people.forEach((p) => console.log(p.name, p.height));
    });

  return <div>Services - return</div>;
}
