import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {fetchAnime, fetchAdditionalAnime} from '../../apiCalls'
import {gatherAnime, gatherMoreAnime} from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import AnimeContainer from '../AnimeContainer/AnimeContainer'
import dataCleaner from '../../dataCleaner';
import {connect} from 'react-redux';
import './App.scss';
import AnimeDetails from '../AnimeDetails/AnimeDetails';
import WatchListContainer from '../WatchListContainer/WatchListContainer';
import WatchListDetails from '../WatchListDetails/WatchListDetails';


class App extends Component {
  constructor() {
    super();
    this.state = {
      animeList: []
    }
  }
  async componentDidMount(){
    try{
      const result = await fetchAnime()
      const cleanData = dataCleaner(result.data)
      this.props.gatherAnime(cleanData)
      const result2 = await fetchAdditionalAnime()
      const cleanData2 = dataCleaner(result2.data)
      this.props.gatherMoreAnime(cleanData2)
    
    } catch(error) {
      console.log(error)
    }


  }

  addToList = newShow => {
    this.setState({ animeList: [...this.state.animeList, newShow]}) 
  }

  render() {
    return(
      <main className="app">
        <img src='https://images6.alphacoders.com/656/thumb-1920-656029.png' 
            alt='background with multiple anime characters'
            className='background-photo' />
        <header>
        <h1>Anime Tracker</h1>
        <Navbar />
        </header>
        <Route exact path='/'
          render={() => (
            <AnimeContainer />
          )} />
        <Route exact path='/watchlist'
        render={() => (
          <WatchListContainer />
        )} />
        <Route exact path='/anime/:id'
          render={({match}) => {
            const id = match.params;
            const show = this.props.anime.find(anime => parseInt(anime.id) === parseInt(id.id))
            return <AnimeDetails {...show} />
        }} />
        <Route exact path='/watchlist/:id'
          render={({match}) => {
            const id = match.params
            const show = this.props.followedShows.find(anime => parseInt(anime.id) === parseInt(id.id))
            console.log(show)
            return <WatchListDetails {...show} />
          }}
          />
      </main>
    )
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  gatherAnime: data => dispatch(gatherAnime(data)),
  gatherMoreAnime: data => dispatch(gatherMoreAnime(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
