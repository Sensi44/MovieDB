import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/';
const apiKey = 'cd6100594cd5dced56b923866a3e33d9';

export function searchMovies(search, page) {
  const tempSearch = search.split(' ').join('%');
  const apiUrl = `${baseURL}3/search/movie?api_key=${apiKey}&
  language=en-US&query=${tempSearch}&page=${page}&include_adult=false`;
  const res = axios.get(apiUrl).then((resp) => resp.data);
  return res;
}

export async function rateMovie(id, value, sessionId) {
  const data = { value };
  const url = `${baseURL}3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${sessionId}`;
  const options = {
    headers: { 'content-type': 'application/json' },
  };
  const res = await axios.post(url, data, options).then((r) => null);
  return res;
}

export async function getRatedMovies(id, page) {
  const options = '&language=en-US&sort_by=created_at.asc';
  const url = `${baseURL}3/guest_session/${id}/rated/movies?api_key=${apiKey}&page=${page}${options}`;
  const res = await axios.get(url).then((resp) => resp.data);
  return res;
}

export async function getGuestSessionId() {
  const url = `${baseURL}3/authentication/guest_session/new?api_key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const guestId = await res.json();
  return guestId;
}

export const getRate = (id, r) => {
  let rating = null;
  r.forEach((rateItem) => {
    if (id === rateItem.id) {
      rating = rateItem.rating;
    }
  });
  return rating;
};

export async function getGenres() {
  const apiUrl = `${baseURL}3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  const res = await axios.get(apiUrl).then((resp) => resp.data);
  return res;
}
