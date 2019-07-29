export const followedShowsReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_SHOW':
      return [...state, action.show]
    case 'REMOVE_SHOW':
      return state.filter(show => show.id !== action.id)
    default:
      return state
  }
}