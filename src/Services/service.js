import axios from 'axios';

// Поиск по фильмам, основной
export function searchMovies(search, page) {
  const tempSearch = search.split(' ').join('%');
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=cd6100594cd5dced56b923866a3e33d9&
  language=en-US&query=${tempSearch}&page=${page}&include_adult=false`;
  const res = axios.get(apiUrl).then((resp) => resp.data);
  return res;
}

// Получение списка жанров
export async function getGenres() {
  const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cd6100594cd5dced56b923866a3e33d9&language=en-US';
  const res = await axios.get(apiUrl).then((resp) => resp.data);
  return res;
}

// Получение списка конкретных жанров
export function setGenres(baseData, searchData) {
  const results = [];
  baseData.forEach((item) => {
    searchData.forEach((genreNumber) => {
      if (item.id === genreNumber) {
        results.push(item.name);
      }
    });
  });
  return results;
}

// Обрезка заголовка
export function truncate(str, maxlength) {
  let result = str.slice(0, maxlength).split(' ');
  if (result.length < 9) {
    result = result.splice(0, result.length).join(' ');
    return (result.length <= maxlength) ? result : `${result}…`;
  }
  if (str.length < maxlength) {
    return result.splice(0, result.length).join(' ');
  }
  result = result.splice(0, result.length - 1).join(' ');
  result = result.includes('.' || ',' || '?' || ',', result.length - 1)
    ? `${result.slice(0, result.length - 1)}…` : `${result}…`;
  return result;
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
  return `${month || '--'} ${(day.toString().length < 2) ? `0${day}` : day}, ${year}`;
}

// Обрезка строки
export function truncateOverview(str, maxlength) {
  let result = str.slice(0, maxlength).split(' ');
  if (str.length < maxlength) {
    result = result.splice(0, result.length).join(' ');
  } else {
    result = result.splice(0, result.length - 1).join(' ');
    result = result.includes('.' || ',' || '?' || ',', result.length - 1)
      ? `${result.slice(0, result.length - 1)}…` : `${result}…`;
  }
  return result;
}

// Пустая функция
// eslint-disable-next-line consistent-return
export async function getImg(posterPath) {
  try {
    const loadResult = await fetch(`https://image.tmdb.org/t/p/w500${posterPath}`);
    return loadResult;
  } catch (e) {
    console.log(e);
  }
}

// Поиск по фильмам, старый
export async function searchMoviesOld(search, page) {
  // try ... catch обязателен для async/await функций
  try {
    const tempSearch = search.split(' ').join('%');
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd6100594cd5dced56b923866a3e33d9&
  language=en-US&query=${tempSearch}&page=${page}&include_adult=false`);
    if (!res.ok) {
      throw new Error(`Could not fetch Movies , received ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    throw new Error(`${e.message} ${e.name}`);
  }
}

//
// export function debounce(fn, debounceTime) {
//   let timer;
//   // eslint-disable-next-line func-names
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, debounceTime);
//   };
// }