import React from 'react'
import {connect} from 'react-redux';
import AnimeSnippet from '../AnimeSnippet/AnimeSnippet';
import './WatchListContainer.scss'

const WatchListContainer = props => {
  let list = props.followedShows.map(anime => {
      return <AnimeSnippet {...anime} isFav={true} />   
  })
  return (
    <section className='watchlist'>
      {list}
    </section>
  )
}

const mapStateToProps = store => ({
  ...store
})

export default connect(mapStateToProps)(WatchListContainer)