export const fetchAnime = (offset) => {
  return fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`)
    .then(response => response.json())
    .catch(error => error.message);
};

export const fetchAdditionalAnime = () => {
  return fetch(
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=10"
  )
    .then(response => response.json())
    .catch(error => error.message);
};
