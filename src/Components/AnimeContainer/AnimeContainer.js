import React from 'react';
import AnimeSnippet from '../AnimeSnippet/AnimeSnippet'
import {connect} from 'react-redux';
import './AnimeContainer.scss'

export const AnimeContainer = (props) => {
  let list = props.anime.map(anime => {
    return <AnimeSnippet {...anime} key={anime.id}/>
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

const mapStateToProps = store => ({
  anime: store.anime
})

export default connect(mapStateToProps)(AnimeContainer);