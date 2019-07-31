import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AnimeSnippet.scss";
import PropTypes from "prop-types";

export class AnimeSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: false
    };
  }

  handleEnter = () => {
    this.setState({ title: true });
  };

  handleLeave = () => {
    this.setState({ title: false });
  };

  titleToDisplay = () => {
    if (this.props.enTitle) {
      return this.props.enTitle;
    } else {
      return this.props.jpTitle;
    }
  };

  checkIsFav = () => {
    if (this.props.isFav) {
      return `/watchlist/${this.props.id}`;
    } else {
      return `/anime/${this.props.id}`;
    }
  };

  render() {
    let title = this.titleToDisplay();
    let route = this.checkIsFav();
    return (
      <Link to={route}>
        {this.state.title && <p className="snippet-title">{title}</p>}
        <img
          src={this.props.posterImage.small}
          alt={`poster for ${this.props.enTitle}`}
          className="snippet-image"
          onMouseEnter={e => this.handleEnter()}
          onMouseLeave={e => this.handleLeave()}
        />
      </Link>
    );
  }
}

AnimeSnippet.propTypes = {
  ageRating: PropTypes.string,
  coverImage: PropTypes.object,
  enTitle: PropTypes.string,
  endDate: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.string,
  jpTitle: PropTypes.string,
  posterImage: PropTypes.object,
  rating: PropTypes.string,
  startDate: PropTypes.string,
  synopsis: PropTypes.string
};

export default AnimeSnippet;
