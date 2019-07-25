export const animeReducer = (state = [], action) => {
  switch (action.type){
    case 'GATHER_ANIME':
      return action.data
    default:
      return state
  }
}