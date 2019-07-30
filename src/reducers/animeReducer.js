export const animeReducer = (state = [], action) => {
  switch (action.type) {
    case "GATHER_ANIME":
      return action.data;
    case "GATHER_MORE_ANIME":
      return [...state, ...action.data];
    default:
      return state;
  }
};
