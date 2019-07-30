import { followedShowsReducer } from '../reducers/followedShowsReducer';

describe('followedShowsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = followedShowsReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the initial state', () => {
    const data = {id: 1, title: 'Life of TronKat'}
    const expected = [{id: 1, title: 'Life of TronKat'}];
    const result = followedShowsReducer(undefined, {type: 'ADD_SHOW', show: data});
    expect(result).toEqual(expected);
  })
  it('should return the initial state', () => {
    const state = [{id: 1, title: 'Life of Tron'}, {id: 2, title: 'Life of Kat'}]
    const id = 1
    const expected = [{id: 2, title: 'Life of Kat'}];
    const result = followedShowsReducer(state, {type: 'REMOVE_SHOW', id});
    expect(result).toEqual(expected);
  })
})