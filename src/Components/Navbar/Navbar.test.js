import React from 'react';
import {shallow} from 'enzyme';
import {Navbar} from './Navbar';

describe('Navbar', () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(
      <Navbar />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})