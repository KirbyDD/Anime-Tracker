export const addShow = newShow => ({
  type: 'ADD_SHOW',
  newShow
})

export const removeShow = id => ({
  type: 'REMOVE_SHOW',
  id
})

export const updateShow = id => ({
  type: 'UPDATE_SHOW',
  id
})

export const gatherAnime = data => ({
  type: 'GATHER_ANIME',
  data
})