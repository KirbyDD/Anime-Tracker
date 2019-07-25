import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AnimeDetails.scss'

class AnimeDetails extends Component {
  constructor(props){
    super(props);
  }

  addToWatchList = () => {

  }

  titleToDisplay = () => {
    if(this.props.enTitle){
      return this.props.enTitle
    } else {
      return this.props.jpTitle
    }
  }

  render(){
    let title = this.titleToDisplay();
    return(
      <section>
        <img />
        <h2>Title: {title}</h2>
        <article>Synopsis
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
          <button>Add To Watch List</button>
        </div>
      </section>
    )
  }
}

export default connect(null)(AnimeDetails);