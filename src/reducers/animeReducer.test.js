import { animeReducer } from '../reducers/animeReducer';

describe('animeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = animeReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the initial state', () => {
    const expected = ['random data 1', 'random data 2'];
    const result = animeReducer(undefined, {type: 'GATHER_ANIME', data: expected});
    expect(result).toEqual(expected);
  })

  it('should return the initial state', () => {
    const state = ['random data 1', 'random data 2']
    let data = ['random data 3', 'random data 4']
    const expected = ['random data 1', 'random data 2', 'random data 3', 'random data 4'];
    const result = animeReducer(state, {type: 'GATHER_MORE_ANIME', data: data});
    expect(result).toEqual(expected);
  })
})