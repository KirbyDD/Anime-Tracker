export const followedShowsReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_SHOW':
      return [...state, action.id]
    case 'REMOVE_SHOW':
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}