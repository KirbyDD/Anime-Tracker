export const fetchAnime = () => {
  return fetch('https://kitsu.io/api/edge/anime')
    .then(response => response.json())
    .then(data => console.log(data))
}