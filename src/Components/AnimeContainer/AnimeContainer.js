import React from "react";
import AnimeSnippet from "../AnimeSnippet/AnimeSnippet";
import { connect } from "react-redux";
import "./AnimeContainer.scss";
import PropTypes from "prop-types";

export const AnimeContainer = props => {
  let list = props.anime.map(anime => {
    return <AnimeSnippet {...anime} key={anime.id} />;
  });
  return (
    <section>
      <h2>List of Shows</h2>
      <div className="list-container">{list}</div>
    </section>
  );
};

export const mapStateToProps = store => ({
  anime: store.anime
});

AnimeContainer.propTypes = {
  anime: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(AnimeContainer);
