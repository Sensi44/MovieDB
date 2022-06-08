// eslint-disable-next-line import/prefer-default-export
const apiBase = 'https://swapi.dev/api/';

export async function getResourse() {
  const res = await fetch(`${apiBase}/planets/1`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiBase}/planets/1 , received ${res.status}`);
  }
  const body = await res.json();
  console.log(body);
  return body;
}

export async function getPeople(id) {
  const res = await fetch(`${apiBase}/people/${id}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiBase}/people/${id} , received ${res.status}`);
  }
  const body = await res.json();
  console.log(body);
  return body;
}

export async function getImg(id) {
  const res = await fetch(`${apiBase}/people/${id}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiBase}/people/${id} , received ${res.status}`);
  }
  const body = await res.json();
  console.log(body);
  return body;
}