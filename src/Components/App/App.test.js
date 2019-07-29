import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App';

let animeList = [
  {
    name: 'anime1',
    id: 1
  },
  {
    name: 'anime2',
    id: 2
  },
  {
    name: 'anime3',
    id: 3
  }
]

describe('App', () => {
  let wrapper;

  beforeEach(function(){
    wrapper = shallow(
      <App />
    )

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(animeList)
    }))
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  // it('should call functions when component mounts', () => {
  //   expect(window.fetch).toHaveBeenCalled();
  // })
})
