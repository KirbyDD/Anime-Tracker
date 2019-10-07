import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchAnime, fetchAdditionalAnime } from "../../apiCalls";
import { gatherAnime, gatherMoreAnime } from "../../actions/index";
import Navbar from "../Navbar/Navbar";
import AnimeContainer from "../AnimeContainer/AnimeContainer";
import dataCleaner from "../../dataCleaner";
import { connect } from "react-redux";
import "./App.scss";
import AnimeDetails from "../AnimeDetails/AnimeDetails";
import WatchListContainer from "../WatchListContainer/WatchListContainer";
import WatchListDetails from "../WatchListDetails/WatchListDetails";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import PropTypes from "prop-types";
import Dictionary from "../Dictionary/Dictionary";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      pageOffset: 0
    }
  }
  async componentDidMount() {
    await fetchAnime(this.state.pageOffset)
      .then(result=> dataCleaner(result.data))
      .then(cleanData => this.props.gatherAnime(cleanData))
      .catch(error => error.message)
    
    // fetchAdditionalAnime()
    //   .then(result2 => dataCleaner(result2.data))
    //   .then(cleanData2 => this.props.gatherMoreAnime(cleanData2))
    //   .catch(error => error.message)
  }

  nextPage = async () => {
    await fetchAnime(this.state.pageOffset+20)
    .then(result=> dataCleaner(result.data))
    .then(cleanData => this.props.gatherAnime(cleanData))
    .catch(error => error.message)
    
    this.setState({pageOffset: this.state.pageOffset+=20})
  }

  render() {
    return (
      <main className="app">
        <img
          src="https://images6.alphacoders.com/656/thumb-1920-656029.png"
          alt="background with multiple anime characters"
          className="background-photo"
        />
        <header>
          <h1 className='site-title'>Anime Tracker</h1>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" render={() => <AnimeContainer nextPage={this.nextPage}/>} />
          <Route
            exact
            path="/watchlist"
            render={() => <WatchListContainer />}
          />
          <Route exact path="/dictionary" render={() => <Dictionary />} />
          <Route
            exact
            path="/anime/:id"
            render={({ match }) => {
              const id = match.params;
              const show = this.props.anime.find(
                anime => parseInt(anime.id) === parseInt(id.id)
              );
              return <AnimeDetails {...show} />;
            }}
          />
          <Route
            exact
            path="/watchlist/:id"
            render={({ match }) => {
              const id = match.params;
              const show = this.props.followedShows.find(
                anime => parseInt(anime.id) === parseInt(id.id)
              );
              console.log(show);
              return <WatchListDetails {...show} />;
            }}
          />
          <Route
            render={() => {
              return <ErrorComponent />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export const mapStateToProps = store => ({
  ...store
});

export const mapDispatchToProps = dispatch => ({
  gatherAnime: data => dispatch(gatherAnime(data)),
  gatherMoreAnime: data => dispatch(gatherMoreAnime(data))
});

App.propTypes = {
  anime: PropTypes.array,
  followedShows: PropTypes.array,
  gatherAnime: PropTypes.func,
  gatherMoreAnime: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
