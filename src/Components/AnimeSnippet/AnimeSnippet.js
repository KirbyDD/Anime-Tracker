import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './AnimeSnippet.scss'

class AnimeSnippet extends Component {
  constructor(props){
    super(props)
    this.state = {
      tite: false
    }
  }

  handleEnter = () => {
    this.setState({ title: true })
  }

  handleLeave = () => {
    this.setState({ title: false })
  }

  titleToDisplay = () => {
    if(this.props.enTitle){
      return this.props.enTitle
    } else {
      return this.props.jpTitle
    }
  }

  render() {
    let title = this.titleToDisplay()
    return (
      <Link to={`/${this.props.enTitle}`}>
      {this.state.title && <p className='snippet-title'>{title}</p>}
        <img src={this.props.posterImage.small} 
              alt={`poster for ${this.props.enTitle}`} 
              className="snippet-image"
              onMouseEnter={e => this.handleEnter()}
              onMouseLeave={e => this.handleLeave()}
              />
      </Link>
    )
  }
}

export default AnimeSnippet;