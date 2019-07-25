export const fetchAnime = () => {
  return fetch('https://kitsu.io/api/edge/anime')
    .then(response => response.json())
    .catch(error => console.log(error.message))
}

export const fetchAdditionalAnime = () => {
  return fetch('https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=10')
    .then(response => response.json())
    .catch(error => console.log(error.message))
}