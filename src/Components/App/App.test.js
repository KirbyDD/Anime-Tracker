import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { gatherAnime, gatherMoreAnime } from '../../actions/index';
import {fetchAnime} from '../../apiCalls';


const anime = {
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

jest.mock('../../apiCalls.js', () => ({
  fetchAnime: jest.fn().mockImplementation(() => {
    return Promise.resolve({
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
    })
  }),
  fetchAdditionalAnime: jest.fn().mockImplementation(() => {
    return Promise.resolve({
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
    })
  }),

}))

jest.mock('../../dataCleaner.js', () => ({
  dataCleaner: jest.fn().mockImplementation(() => {
    return Promise.resolve({
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
    })
  })
}))


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

let props = {
  anime: [anime],
  followedShows,
  gatherAnime: jest.fn(),
  gatherMoreAnime: jest.fn(),
}



describe("App", () => {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<App  {...props} />);
    
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(animeList)
      })
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchAnime, dataCleaner', async () => {
    await wrapper.instance().componentDidMount();
    expect(fetchAnime).toHaveBeenCalled();
  })
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
