import React from 'react';
import {Link} from 'react-router-dom'
import './AnimeSnippet.scss'

const AnimeSnippet = props => {
  return (
    <Link to={`/${props.enTitle}`}>
      <img src={props.posterImage.small} alt={`poster for ${props.enTitle}`} className="snippet-image"/>
    </Link>
  )
}

export default AnimeSnippet;