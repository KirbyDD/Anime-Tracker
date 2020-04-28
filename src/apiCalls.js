export const fetchAnime = (offset) => {
  return fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`)
    .then(response => response.json())
    .catch(error => error.message);
};

export const fetchTerms = () => {
  return fetch('http://anime-tracker-be.herokuapp.com/api/v1/terms')
    .then(response => response.json())
    .catch(error => error.message);
};
