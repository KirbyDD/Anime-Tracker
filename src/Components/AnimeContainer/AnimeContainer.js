import React from 'react';
import Card from '../Card/Card'
import {connect} from 'react-redux';
import './AnimeContainer.scss'

const AnimeContainer = (props) => {
  let list = props.anime.map(anime => {
    return <Card {...anime}/>
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