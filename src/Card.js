import React from 'react';
import './Card.scss'

const Card = ({name, episode, id}) => {
  return (
    <article className="card">
      <h3>Name: {name}</h3>
      <p>Episode #: {episode}</p>
    </article>
  )
}

export default Card;