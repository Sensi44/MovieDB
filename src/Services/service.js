const apiBase = 'https://swapi.dev/api/';

// Поиск по фильмам, основной
export async function searchMovies(search, page) {
  try {
    const tempSearch = search.split(' ').join('%');
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd6100594cd5dced56b923866a3e33d9&
  language=en-US&query=${tempSearch}&page=${page}&include_adult=true`);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch Movies , received ${res.status}`);
    }
    const body = await res.json();
    // console.log(body);
    return body;
  } catch (e) {
    console.log(e);
  }
  return false;
}

// Обрезка строки
export function truncate(str, maxlength) {
  let result = str.slice(0, maxlength).split(' ');
  result = result.splice(0, result.length - 1).join(' ');
  result = result.includes('.', result.length - 1)
    ? result.slice(0, result.length - 1) : result;
  result = result.includes('?', result.length - 1)
    ? result.slice(0, result.length - 1) : result;
  result = result.includes('!', result.length - 1)
    ? result.slice(0, result.length - 1) : result;
  result = result.includes(',', result.length - 1)
    ? result.slice(0, result.length - 1) : result;
  return `${result} …`;
}

// Преобразование даты
export function dateCorrector(date) {
  if (!date) return 'Нет даты';
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

// Пустая функция
export async function getResourse() {
  const res = await fetch(`${apiBase}/planets/1`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiBase}/planets/1 , received ${res.status}`);
  }
  const body = await res.json();
  console.log(body);
  return body;
}
