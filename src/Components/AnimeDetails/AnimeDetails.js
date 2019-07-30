import React, { Component } from "react";
import { connect } from "react-redux";
import "./AnimeDetails.scss";
import { addShow, removeShow } from "../../actions";

export class AnimeDetails extends Component {
  constructor(props) {
    super(props);
  }

  checkList = id => {
    let result = this.props.followedShows.find(show => show.id === id);
    if (result) {
      this.props.removeFromWatchList(id);
    } else {
      let show = {
        id: this.props.id,
        synopsis: this.props.synopsis,
        enTitle: this.props.enTitle,
        jpTitle: this.props.jpTitle,
        episodes: this.props.episodes,
        posterImage: this.props.posterImage,
        coverImage: this.props.coverImage,
        currentEpisode: 1,
        comment: ""
      };
      this.props.addToWatchList(show);
    }
    this.updateFavButton(id);
  };

  updateFavButton = id => {
    let result = this.props.followedShows.find(show => show.id === id);
    if (result) {
      return "Remove from Watch List";
    } else {
      return "Add to Watch List";
    }
  };

  titleToDisplay = () => {
    if (this.props.enTitle) {
      return this.props.enTitle;
    } else {
      return this.props.jpTitle;
    }
  };

  render() {
    let title = this.titleToDisplay();
    let btntext = this.updateFavButton(this.props.id);
    return (
      <section className="anime-details">
        <img src={this.props.posterImage.large} className="poster" />
        <div className="details-styling">
          <h2>Title: {title}</h2>
          <article>
            <h3>Synopsis</h3>
            <p>{this.props.synopsis}</p>
          </article>
          <div>
            <p>Rating: {this.props.rating} </p>
            <p>Age Rating: {this.props.ageRating}</p>
          </div>
          <div>
            <p>Start Date: {this.props.startDate}</p>
            <p>End Date: {this.props.endDate}</p>
            <p>Number of Episodes: {this.props.episodes}</p>
            <button onClick={e => this.checkList(this.props.id)}>
              {btntext}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  ...store
});

const mapDispatchToProps = dispatch => ({
  addToWatchList: show => dispatch(addShow(show)),
  removeFromWatchList: id => dispatch(removeShow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeDetails);
