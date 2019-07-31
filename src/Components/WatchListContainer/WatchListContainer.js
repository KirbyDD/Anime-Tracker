import React from "react";
import { connect } from "react-redux";
import AnimeSnippet from "../AnimeSnippet/AnimeSnippet";
import "./WatchListContainer.scss";
import PropTypes from "prop-types";

export const WatchListContainer = props => {
  let list = props.followedShows.map(anime => {
    return <AnimeSnippet {...anime} isFav={true} key={anime.id} />;
  });
  return <section className="watchlist">{list}</section>;
};

const mapStateToProps = store => ({
  ...store
});

WatchListContainer.propTypes = {
  anime: PropTypes.array,
  followedShows: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(WatchListContainer);
