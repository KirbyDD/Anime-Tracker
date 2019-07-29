export const followedShowsReducer = (state = [], action) => {
  const showToUpdate = state.find(show => show.id === action.id)
  switch (action.type){
    case 'ADD_SHOW':
      return [...state, action.show]
    case 'REMOVE_SHOW':
      return state.filter(show => show.id !== action.id)
    case 'UPDATE_CURR_EP':
      showToUpdate.currentEpisode = parseInt(action.value);
      return state;
    case 'UPDATE_COMMENT':
      showToUpdate.comment = action.comment;
      return state;
    default:
      return state
  }
}