import React from 'react';
import dataCleaner from './dataCleaner'
import { isTSAnyKeyword } from '@babel/types';

let expected = [{
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
}]

let data = [{
  id: 1,
  attributes: {
    synopsis: 'This is the synopsis',
    titles: {
      en: 'Life of TronKat',
      en_jp: 'Tronkat no Life desu',
    },
    episodeCount: 27,
    posterImage: {
      large: 'https://i.imgur.com/vihivug.jpg',
      tiny: null
    },
    coverImage: {
      small: 'https://i.imgur.com/vihivug.jpg',
      tiny: null
    },
    averageRating: '99.9',
    startDate: '1990-01-26',
    endDate: 'Still Playing',
    ageRatingGuide: '17+',
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }
}]

describe('dataCleaner', () => {
  it('should adjust data accordingly', () => {
    expect(dataCleaner(data)).toEqual(expected)
  })
})