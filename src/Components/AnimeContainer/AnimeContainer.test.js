import React from "react";
import { shallow } from "enzyme";
import { AnimeContainer, mapStateToProps} from "./AnimeContainer";

let anime = [
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

describe("Anime Container", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<AnimeContainer anime={anime} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return object with anime array', () => {
      let mockState = {
        anime: [ {
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
        }]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(mockState)
    })
  })
});
