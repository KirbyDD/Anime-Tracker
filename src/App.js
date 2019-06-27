import React, { Component } from 'react';
import Navbar from './Navbar';
import AnimeContainer from './AnimeContainer'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animeList: []
    }
  }

  render() {
    return(
      <main>
        <h1>Working</h1>
        <Navbar />
        <AnimeContainer />
      </main>
    )
  }
}

export default App;
