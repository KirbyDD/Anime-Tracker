import React, {Component} from 'react';
import {connect} from 'react-redux';

class AnimeDetails extends Component {
  constructor(props){
    super(props);
  }

  addToWatchList = () => {
    
  }

  render(){
    return(
      <section>
        <img />
        <p>Status: </p>
        <h2>Title: </h2>
        <article>Synopsis
          <p></p>
        </article>
        <div>
          <p>Rating: </p>
          <p>Age Rating:</p>
        </div>
        <div>
          <p>Start Date</p>
          <p>End Date</p>
          <p>Number of Episodes</p>
          <button>Add To Watch List</button>
        </div>
      </section>
    )
  }
}

export default connect(null)(AnimeDetails);