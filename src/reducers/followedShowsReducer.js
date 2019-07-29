export const followedShowsReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_SHOW':
      return [...state, action.show]
    case 'REMOVE_SHOW':
      return state.filter(show => show.id !== action.id)
    case 'UPDATE_CURR_EP':
      const showToUpdate = state.find(show => show.id === action.id)
      showToUpdate.currentEpisode = parseInt(action.value);
      return state;
    default:
      return state
  }
}