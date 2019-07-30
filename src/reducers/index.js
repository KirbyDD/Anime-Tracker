import { combineReducers } from "redux";
import { animeReducer } from "./animeReducer";
import { followedShowsReducer } from "./followedShowsReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  followedShows: followedShowsReducer
});

export default rootReducer;
