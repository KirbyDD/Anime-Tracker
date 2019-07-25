import React, { Component } from 'react';
import {fetchAnime, fetchAdditionalAnime} from '../../apiCalls'
import {gatherAnime, gatherMoreAnime} from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form'
import AnimeContainer from '../AnimeContainer/AnimeContainer'
import dataCleaner from '../../dataCleaner';
import {connect} from 'react-redux';
import './App.scss';

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
        <Form addToList={this.addToList}/>
        <AnimeContainer animeList={this.state.animeList}/>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  gatherAnime: data => dispatch(gatherAnime(data)),
  gatherMoreAnime: data => dispatch(gatherMoreAnime(data))
})

export default connect(null, mapDispatchToProps)(App);
