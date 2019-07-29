import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrentEpisode} from '../../actions/index'

class WatchListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false,
      commentText: this.setComment()
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

  setCurrentEpisode = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id)
    return show.currentEpisode
  }

  setComment = () => {
    let show = this.props.followedShows.find(show => show.id === this.props.id)
    this.setState({ commentText: show.comment }) 
  }

  render() {
    let title = this.titleToDisplay();
    let currentEpisode = this.setCurrentEpisode();
    
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
        {this.state.commentBtn && 
          <button onClick={e => this.changeComment()}>Update</button>
        }
        {this.state.comment && 
          <article>
          <textarea value={this.state.commentText}></textarea>
          <button>Sumbit</button>
          </article>  
        }
      </section>
    )
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  updateEpisode: (id, value) => dispatch(updateCurrentEpisode(id, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchListDetails)