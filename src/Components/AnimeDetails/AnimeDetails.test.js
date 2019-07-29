import React from 'react';
import {shallow} from 'enzyme';
import {AnimeDetails} from './AnimeDetails';

let props = {
  id: 1,
  synopsis: 'This is the synopsis',
  enTitle: 'Life of TronKat',
  jpTitle: 'Tronkat no Life desu',
  episodes: 27,
  posterImage: {
    large: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  coverImage: {
    small: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  rating: '99.9',
  startDate: '1990-01-26',
  endDate: 'Still Playing',
  ageRating: '17+'
}

let props2 = {
  id: 3,
  enTitle: null,
  jpTitle: 'Tronkat no Life desu',
  episodes: 27,
  posterImage: {
    large: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  coverImage: {
    small: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  rating: '99.9',
  startDate: '1990-01-26',
  endDate: 'Still Playing',
  ageRating: '17+'
}

let result = {
  id: 1,
  synopsis: 'This is the synopsis',
  enTitle: 'Life of TronKat',
  jpTitle: 'Tronkat no Life desu',
  episodes: 27,
  posterImage: {
    large: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  coverImage: {
    small: 'https://i.imgur.com/vihivug.jpg',
    tiny: null
  },
  currentEpisode: 1,
  comment: ''
}

let followedShows = [
  {
    id: 1,
    synopsis: 'This is the synopsis',
    enTitle: 'Life of TronKat',
    jpTitle: 'Tronkat no Life desu',
    episodes: 27,
    posterImage: {
      large: 'https://i.imgur.com/vihivug.jpg',
      tiny: null
    },
    coverImage: {
      small: 'https://i.imgur.com/vihivug.jpg',
      tiny: null
    },
    rating: '99.9',
    startDate: '1990-01-26',
    endDate: 'Still Playing',
    ageRating: '17+'
  }
]

describe('Anime Details', () => {
  let wrapper;
  let removeFromWatchList;
  let addToWatchList;

  beforeEach(function(){
    removeFromWatchList = jest.fn();
    addToWatchList = jest.fn();
    wrapper = shallow(
      <AnimeDetails {...props} followedShows={followedShows}
      removeFromWatchList={removeFromWatchList}
      addToWatchList={addToWatchList}/>
      )
    })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call checklist when button is clicked', () => {
    wrapper.instance().checkList = jest.fn();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().checkList).toHaveBeenCalled()
  })

  it('should call removeFromWatchList if show is found', () => {
    wrapper.instance().checkList(props.id);
    expect(removeFromWatchList).toHaveBeenCalled()
  })

  it('should call addToWatchList if show is found', () => {
    wrapper.instance().checkList(2);
    wrapper.instance().updateFavButton = jest.fn();
    expect(addToWatchList).toHaveBeenCalledWith(result)
  })

  it('should return Remove from Watch list', () => {
    expect(wrapper.instance().updateFavButton(1)).toEqual('Remove from Watch List')
  })

  it('should return Add to Watch list', () => {
    expect(wrapper.instance().updateFavButton(2)).toEqual('Add to Watch List')
  })

  it('should return English Title', () => {
    expect(wrapper.instance().titleToDisplay()).toEqual('Life of TronKat')
  })

  it('should return japanese Title', () => {
    wrapper = shallow(
      <AnimeDetails {...props2} followedShows={followedShows}
      removeFromWatchList={removeFromWatchList}
      addToWatchList={addToWatchList}/>
      )
    expect(wrapper.instance().titleToDisplay()).toEqual('Tronkat no Life desu')
  })
})