export const fetchAnime = (offset) => {
  return fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`)
    .then(response => response.json())
    .catch(error => error.message);
};
