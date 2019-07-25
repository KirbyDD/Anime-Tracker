import React from 'react';
import Card from '../Card/Card'
import './AnimeContainer.scss'

const AnimeContainer = ({animeList}) => {
  let list = animeList.map(anime => {
    return <Card name={anime.name} episode={anime.episode} id={anime.id}/>
  })
  return (
    <section>
      <h2>List of Shows</h2>
      <div className="list-container">
        {list}
      </div>
    </section>
  )
}

export default AnimeContainer;