// eslint-disable-next-line import/prefer-default-export
const apiBase = 'https://swapi.dev/api/';

// Поиск по фильмам, основной
export async function searchMovies() {
  const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=cd6100594cd5dced56b923866a3e33d9&language=en-US&query=return&page=1&include_adult=false');
  if (!res.ok) {
    throw new Error(`Could not fetch Movies , received ${res.status}`);
  }
  const body = await res.json();
  console.log(body);
  return body;
}

// Обрезка строки
export function truncate(str, maxlength) {
  console.log('truncate');
  let temp = str.split(' ').slice(0, maxlength).join(' ');

  temp = temp.includes('.', temp.length - 1) ? temp.slice(0, temp.length - 1) : temp;
  temp = temp.includes('?', temp.length - 1) ? temp.slice(0, temp.length - 1) : temp;
  temp = temp.includes('!', temp.length - 1) ? temp.slice(0, temp.length - 1) : temp;
  temp = temp.includes(',', temp.length - 1) ? temp.slice(0, temp.length - 1) : temp;

  return `${temp} …`;
}

// Преобразование даты
export function dateCorrector(date) {
  const temp = date.split('-');
  const year = temp[0];
  const monthsArray = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];
  const month = monthsArray[+temp[1]];
  const day = +temp[2];
  return `${month} ${day}, ${year}`;
}

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