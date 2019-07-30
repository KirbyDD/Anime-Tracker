export const addShow = show => ({
  type: 'ADD_SHOW',
  show
})

export const removeShow = id => ({
  type: 'REMOVE_SHOW',
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

export const updateCurrentEpisode = (id, value) => ({
  type: 'UPDATE_CURR_EP',
  id,
  value
})

export const updateComment = (id, comment) => ({
  type: 'UPDATE_COMMENT',
  id,
  comment
})