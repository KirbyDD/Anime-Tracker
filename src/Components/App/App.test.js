import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { gatherAnime, gatherMoreAnime } from '../../actions/index'

let animeList = [
  {
    name: "anime1",
    id: 1
  },
  {
    name: "anime2",
    id: 2
  },
  {
    name: "anime3",
    id: 3
  }
];

let props = {
  id: 1,
  synopsis: "This is the synopsis",
  enTitle: "Life of TronKat",
  jpTitle: "Tronkat no Life desu",
  episodes: 27,
  posterImage: {
    large: "https://i.imgur.com/vihivug.jpg",
    tiny: null
  },
  coverImage: {
    small: "https://i.imgur.com/vihivug.jpg",
    tiny: null
  },
  rating: "99.9",
  startDate: "1990-01-26",
  endDate: "Still Playing",
  ageRating: "17+"
};

let followedShows = [
  {
    id: 1,
    synopsis: "This is the synopsis",
    enTitle: "Life of TronKat",
    jpTitle: "Tronkat no Life desu",
    episodes: 27,
    posterImage: {
      large: "https://i.imgur.com/vihivug.jpg",
      tiny: null
    },
    coverImage: {
      small: "https://i.imgur.com/vihivug.jpg",
      tiny: null
    },
    rating: "99.9",
    startDate: "1990-01-26",
    endDate: "Still Playing",
    ageRating: "17+"
  }
];

describe("App", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<App />);

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(animeList)
      })
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})

  describe('mapStateToProps', () => {
    it('should return object with anime array', () => {
      let mockState = {
        anime: props,
        followedShows
      }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(mockState)
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addShow action when addToWatchList is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = gatherAnime([props]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.gatherAnime([props]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an removeShow action when removeFromWatchList is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = gatherMoreAnime([props]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.gatherMoreAnime([props]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
});
