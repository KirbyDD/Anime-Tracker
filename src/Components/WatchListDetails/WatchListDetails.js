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

  render() {
    return(
      <section>
        <h2>{this.props.enTitle}</h2>
        <h3>{this.props.synopsis}</h3>
        <select onChange={e => this.updateEpisode(e)}>
          {this.numOptions()}
        </select>

      </section>
    )
  }
}

export default connect(null)(WatchListDetails)