export const addShow = id => ({
  type: 'ADD_SHOW',
  id
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

export const gatherMoreAnime = data => ({
  type: 'GATHER_MORE_ANIME',
  data
})