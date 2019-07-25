export const followedShowsReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_SHOW':
      return [...state, action.newShow]
    default:
      return state
  }
}