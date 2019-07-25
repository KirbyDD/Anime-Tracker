import React, { Component } from 'react';
import {fetchAnime} from '../../apiCalls'
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form'
import AnimeContainer from '../AnimeContainer/AnimeContainer'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animeList: []
    }
  }
  componentDidMount(){
    fetchAnime()
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

export default App;
