import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {fetchAnime, fetchAdditionalAnime} from '../../apiCalls'
import {gatherAnime, gatherMoreAnime} from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form'
import AnimeContainer from '../AnimeContainer/AnimeContainer'
import dataCleaner from '../../dataCleaner';
import {connect} from 'react-redux';
import './App.scss';
import AnimeDetails from '../AnimeDetails/AnimeDetails';


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
        <h1>Anime Tracker</h1>
        <Navbar />
        <Route exact path='/'
          render={() => (
            <AnimeContainer />
          )} />
        <Route exact path='/:id'
          render={({match}) => {
            const id = match.params;
            const show = this.props.anime.find(anime => parseInt(anime.id) === parseInt(id.id))
            console.log(show)
            return <AnimeDetails {...show} />
          }} />
        {/* <Form addToList={this.addToList}/> */}
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
