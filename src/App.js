import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form'
import AnimeContainer from './AnimeContainer'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animeList: []
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

export default App;
