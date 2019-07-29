import React from 'react';
import {shallow} from 'enzyme';
import {WatchListDetails} from './WatchListDetails';
import { exportAllDeclaration } from '@babel/types';

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
  currentEpisode: 1,
  comment: ''
}

let props2 = {
  id: 1,
  synopsis: 'This is the synopsis',
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
  currentEpisode: 7,
  comment: 'Testing'
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

let followedShows2 = [
  {
    id: 1,
  synopsis: 'This is the synopsis',
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
  currentEpisode: 7,
  comment: 'Testing'
  }
]

describe('WatchList Details', () => {
  let wrapper;
  let updateEpisode;
  let updateComment;

  beforeEach(function() {
    updateEpisode = jest.fn();
    updateComment = jest.fn();
    wrapper = shallow(
      <WatchListDetails {...props} episodes={20}
                        followedShows={followedShows}
                        updateEpisode={updateEpisode}
                        updateComment={updateComment}/>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot', () => {
    wrapper.instance().changeCurrentEpisode();
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot', () => {
    wrapper.instance().changeComment();
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state properties', () => {
    expect(wrapper.state()).toEqual({
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false
    })
  })

  it('should have update state when Changing Episode', () => {
    wrapper.instance().changeCurrentEpisode();
    expect(wrapper.state()).toEqual({
      epBtn: false,
      form: true,
      commentBtn: true,
      comment: false
    })
  })

  it('should have update state when Updating episode', () => {
    wrapper.instance().changeCurrentEpisode();
    expect(wrapper.state()).toEqual({
      epBtn: false,
      form: true,
      commentBtn: true,
      comment: false
    })

    wrapper.instance().updateEpisode();
    expect(wrapper.state()).toEqual({
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false
    })
  })

  it('should have update state when Changing Comment', () => {
    wrapper.instance().changeComment();
    expect(wrapper.state()).toEqual({
      epBtn: true,
      form: false,
      commentBtn: false,
      comment: true
    })
  })

  it('should have update state Updating Comment', () => {
    wrapper.instance().changeComment();
    expect(wrapper.state()).toEqual({
      epBtn: true,
      form: false,
      commentBtn: false,
      comment: true
    })
    wrapper.instance().updateComment()
    expect(wrapper.state()).toEqual({
      epBtn: true,
      form: false,
      commentBtn: true,
      comment: false
    })
  })

  it('should return English Title', () => {
    expect(wrapper.instance().titleToDisplay()).toEqual('Life of TronKat')
  })

  it('should return japanese Title', () => {
    wrapper = shallow(
      <WatchListDetails {...props2} episodes={20}
      followedShows={followedShows}
      updateEpisode={updateEpisode}
      updateComment={updateComment}/>
      )
    expect(wrapper.instance().titleToDisplay()).toEqual('Tronkat no Life desu')
  })

  it('should return an array whose length is equal to episodes', () => {
    expect(wrapper.instance().numOptions().length).toEqual(20)
  })

  it('should return current episode', () => {
    wrapper = shallow(
      <WatchListDetails {...props2} episodes={20}
      followedShows={followedShows2}
      updateEpisode={updateEpisode}
      updateComment={updateComment}/>
      )
    expect(wrapper.instance().setCurrentEpisode()).toEqual(7)
  })

  it('should return current reminder comment', () => {
    wrapper = shallow(
      <WatchListDetails {...props2} episodes={20}
      followedShows={followedShows2}
      updateEpisode={updateEpisode}
      updateComment={updateComment}/>
      )
      expect(wrapper.instance().setComment()).toEqual('Testing')
  })
})