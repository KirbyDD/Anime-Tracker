import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateCurrentEpisode,
  updateCurrentComment,
  removeShow
} from "../../actions/index";
import "./WatchListDetails.scss";
import PropTypes from "prop-types";

export class WatchListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false
    };
  }

  numOptions = () => {
    let options = [];
    for (let i = 1; i <= this.props.episodes; i++) {
      options.push(<option value={i}>{i}</option>);
      if (options.length === this.props.episodes) {
        return options;
      }
    }
  };

  titleToDisplay = () => {
    if (this.props.enTitle) {
      return this.props.enTitle;
    } else {
      return this.props.jpTitle;
    }
  };

  changeCurrentEpisode = () => {
    this.setState({
      epBtn: false,
      form: true
    });
  };

  changeComment = () => {
    this.setState({
      commentBtn: false,
      comment: true
    });
  };

  updateEpisode = (id, value) => {
    this.props.updateEpisode(id, value);
    this.setState({
      epBtn: true,
      form: false
    });
  };

  updateComment = (id, value) => {
    this.props.updateComment(id, value);
    this.setState({
      commentBtn: true,
      comment: false
    });
  };

  setCurrentEpisode = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id);
    return show.currentEpisode;
  };

  setComment = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id);
    return show.comment;
  };

  render() {
    let title = this.titleToDisplay();
    let currentEpisode = this.setCurrentEpisode();
    let comment = this.setComment();
    return (
      <section className="watchlist-details">
        <div className="watchlist-detail-info">
          <h2>{title}</h2>
          <h3>{this.props.synopsis}</h3>
          <p className="detail-text">What Episode are you currently on?</p>
          <p className="detail-text">{currentEpisode}</p>
          {this.state.epBtn && (
            <button id='epBtn' onClick={e => this.changeCurrentEpisode()}>Update</button>
          )}
          {this.state.form && (
            <select
              id='update-epBtn'
              onChange={e => this.updateEpisode(this.props.id, e.target.value)}
              selected={this.props.currentEpisode}
            >
              {this.numOptions()}
            </select>
          )}
          <p className="detail-text">Reminder Section</p>
          <p className="detail-text">{comment}</p>
          {this.state.commentBtn && (
            <button id='commentBtn' onClick={e => this.changeComment()}>Update</button>
          )}
          {this.state.comment && (
            <article>
              <textarea placeholder="Type new reminder here" />
              <br />
              <button
                id='update-commentBtn'
                onClick={e =>
                  this.updateComment(
                    this.props.id,
                    e.target.previousElementSibling.previousElementSibling.value
                  )
                }
              >
                Sumbit
              </button>
            </article>
          )}
          <br />
          <Link to="/watchlist">
            <button
              className="remove-btn"
              onClick={e => this.props.removeFromWatchList(this.props.id)}
            >
              Remove From WatchList
            </button>
          </Link>
        </div>
        <img className="side-image" src={this.props.posterImage.large} />
      </section>
    );
  }
}

export const mapStateToProps = store => ({
  ...store
});

export const mapDispatchToProps = dispatch => ({
  updateEpisode: (id, value) => dispatch(updateCurrentEpisode(id, value)),
  updateComment: (id, comment) => dispatch(updateCurrentComment(id, comment)),
  removeFromWatchList: id => dispatch(removeShow(id))
});

WatchListDetails.propTypes = {
  anime: PropTypes.array,
  comment: PropTypes.string,
  coverImage: PropTypes.object,
  currentEpisode: PropTypes.number,
  enTitle: PropTypes.string,
  episodes: PropTypes.number,
  followedShows: PropTypes.array,
  id: PropTypes.number,
  jpTitle: PropTypes.string,
  posterImage: PropTypes.object,
  removeFromWatchList: PropTypes.func,
  synopsis: PropTypes.string,
  updateComment: PropTypes.func,
  updateEpisode: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchListDetails);
