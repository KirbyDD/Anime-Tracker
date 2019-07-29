import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateCurrentEpisode, updateComment, removeShow} from '../../actions/index'

class WatchListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false
    }
  }

  numOptions = () => {
    let options = []
    for(let i = 1; i <= this.props.episodes; i++){
        options.push(<option value={i}>{i}</option>)
      if(options.length === this.props.episodes){
        return options
      }
    }
  }

  titleToDisplay = () => {
    if(this.props.enTitle){
      return this.props.enTitle
    } else {
      return this.props.jpTitle
    }
  }

  changeCurrentEpisode = () => {
    this.setState({
      epBtn: false,
      form: true
    })
  }

  changeComment = () => {
    this.setState({
      commentBtn: false,
      comment: true
    })
  }

  updateEpisode = (id, value) => {
    this.props.updateEpisode(id, value)
    this.setState({
      epBtn: true,
      form: false
    })
  }

  updateComment = (id, value) => {
    this.props.updateComment(id, value)
    this.setState({
      commentBtn: true,
      comment: false
    })
  }

  setCurrentEpisode = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id)
    return show.currentEpisode
  }

  setComment = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id)
    return show.comment
  }

  render() {
    let title = this.titleToDisplay();
    let currentEpisode = this.setCurrentEpisode();
    let comment = this.setComment();
    return(
      <section>
        <h2>{title}</h2>
        <h3>{this.props.synopsis}</h3>
        <p>What Episode are you currently on?</p>
        <p>{currentEpisode}</p>
        {this.state.epBtn && 
          <button onClick={e => this.changeCurrentEpisode()}>Update</button>
        }
        {this.state.form &&
        <select onChange={e => this.updateEpisode(this.props.id, e.target.value)} 
          selected={this.props.currentEpisode}>
          {this.numOptions()}
        </select>
        }
        <p>Reminder Section</p>
        <p>{comment}</p>
        {this.state.commentBtn && 
          <button onClick={e => this.changeComment()}>Update</button>
        }
        {this.state.comment && 
          <article>
          <textarea placeholder='Type new reminder here'></textarea>
          <button onClick={e => this.updateComment(this.props.id, e.target.previousElementSibling.value)}>Sumbit</button>
          </article>  
        }
        <Link to='/watchlist'>
          <button onClick={e => this.props.removeFromWatchList(this.props.id)}>Remove From WatchList</button>
        </Link>
      </section>
    )
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  updateEpisode: (id, value) => dispatch(updateCurrentEpisode(id, value)),
  updateComment: (id, comment) => dispatch(updateComment(id, comment)),
  removeFromWatchList: id => dispatch(removeShow(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchListDetails)