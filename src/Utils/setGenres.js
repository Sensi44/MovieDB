export default function setGenres(baseData, searchData) {
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
