import React from 'react';
import './Card.scss'

const AnimeSnippet = props => {
  return (
    <article className="snippet-image">
      <img src={props.posterImage.small} alt={`poster for ${props.enTitle}`} />
    </article>
  )
}

export default AnimeSnippet;