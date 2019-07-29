import React, {Component} from 'react';
import {connect} from 'react-redux';

class WatchListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEpisode: 1
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

  updateEpisode = e => {
    this.setState({ currentEpisode: e.target.value })
  }

  titleToDisplay = () => {
    if(this.props.enTitle){
      return this.props.enTitle
    } else {
      return this.props.jpTitle
    }
  }

  render() {
    let title = this.titleToDisplay();
    return(
      <section>
        <h2>{title}</h2>
        <h3>{this.props.synopsis}</h3>
        <select onChange={e => this.updateEpisode(e)}>
          {this.numOptions()}
        </select>

      </section>
    )
  }
}

export default connect(null)(WatchListDetails)