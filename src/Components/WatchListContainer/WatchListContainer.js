import React from 'react'
import {connect} from 'react-redux';
import AnimeSnippet from '../AnimeSnippet/AnimeSnippet';

const WatchListContainer = props => {
  let list = props.followedShows.map(anime => {
      return <AnimeSnippet {...anime} isFav={true} />   
  })
  return (
    <section>
      {list}
    </section>
  )
}

const mapStateToProps = store => ({
  ...store
})

export default connect(mapStateToProps)(WatchListContainer)