import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AnimeDetails.scss'
import { addShow, removeShow } from '../../actions';

class AnimeDetails extends Component {
  constructor(props){
    super(props);
  }

  checkList = id => {
    if(this.props.followedShows.includes(id)){
      this.props.removeFromWatchList(id)
    } else {
      this.props.addToWatchList(id)  
    }

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
          <button onClick={e => this.checkList(this.props.id)}>Add To Watch List</button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch =>({
  addToWatchList: id => dispatch(addShow(id)),
  removeFromWatchList: id => dispatch(removeShow(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails);