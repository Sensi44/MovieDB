import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/';
const apiKey = 'cd6100594cd5dced56b923866a3e33d9';

// Поиск по фильмам, основной
export function searchMovies(search, page) {
  const tempSearch = search.split(' ').join('%');
  const apiUrl = `${baseURL}3/search/movie?api_key=${apiKey}&
  language=en-US&query=${tempSearch}&page=${page}&include_adult=false`;
  const res = axios.get(apiUrl).then((resp) => resp.data);
  return res;
}

// Оценить фильм
export async function rateMovie(id, value, sessionId) {
  const data = { value };
  const url = `${baseURL}3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${sessionId}`;
  const options = {
    headers: { 'content-type': 'application/json' },
  };
  const res = await axios.post(url, data, options).then((r) => null);
  return res;
}

// Получить список оценённых фильмов
export async function getRatedMovies(id, page) {
  const options = '&language=en-US&sort_by=created_at.asc';
  const url = `${baseURL}3/guest_session/${id}/rated/movies?api_key=${apiKey}&page=${page}${options}`;
  const res = await axios.get(url).then((resp) => resp.data);
  return res;
}

// Получить новую гостевую сессию (если в кукисах ничего нет)
export async function getGuestSessionId() {
  const url = `${baseURL}3/authentication/guest_session/new?api_key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const guestId = await res.json();
  return guestId;
}

// Получение рейтинга фильма для страницы поиска
export const getRate = (id, r) => {
  let rating = null;
  r.forEach((rateItem) => {
    if (id === rateItem.id) {
      rating = rateItem.rating;
    }
  });
  return rating;
};

// Получение списка жанров
export async function getGenres() {
  const apiUrl = `${baseURL}3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  const res = await axios.get(apiUrl).then((resp) => resp.data);
  return res;
}

// Получение списка конкретных жанров для каждого фильма
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

// Обрезка заголовка (можно проще :) )
export function truncate(str, maxlength) {
  let result = str.slice(0, maxlength).split(' ');
  if (result.length < 9) {
    result = result.splice(0, result.length).join(' ');
    return result.length <= maxlength ? result : `${result}…`;
  }
  if (str.length < maxlength) {
    return result.splice(0, result.length).join(' ');
  }
  result = result.splice(0, result.length - 1).join(' ');
  result = result.includes('.' || ',' || '?' || ',', result.length - 1)
    ? `${result.slice(0, result.length - 1)}…`
    : `${result}…`;
  return result;
}

// Преобразование даты (переделай на библиотечную функцию)
export function dateCorrector(date) {
  if (!date) return 'Нет даты';
  const temp = date.split('-');
  const year = temp[0];
  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthsArray[+temp[1]];
  const day = +temp[2];
  return `${month || '--'} ${
    day.toString().length < 2 ? `0${day}` : day
  }, ${year}`;
}

// Обрезка строки
// export function truncateOverview(str, maxlength) {
//   let result = str.slice(0, maxlength).split(' ');
//   if (str.length < maxlength) {
//     result = result.splice(0, result.length).join(' ');
//   } else {
//     result = result.splice(0, result.length - 1).join(' ');
//     result = result.includes('.' || ',' || '?' || ',', result.length - 1)
//       ? `${result.slice(0, result.length - 1)}…` : `${result}…`;
//   }
//   return result;
// }

// Поиск по фильмам, старый
// export async function searchMoviesOld(search, page) {
//   try {
//     const tempSearch = search.split(' ').join('%');
//     const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd6100594cd5dced56b923866a3e33d9&
//   language=en-US&query=${tempSearch}&page=${page}&include_adult=false`);
//     if (!res.ok) {
//       throw new Error(`Could not fetch Movies , received ${res.status}`);
//     }
//     return await res.json();
//   } catch (e) {
//     throw new Error(`${e.message} ${e.name}`);
//   }
// }
