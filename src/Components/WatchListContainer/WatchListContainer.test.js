import React from "react";
import { shallow } from "enzyme";
import { WatchListContainer } from "./WatchListContainer";

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

describe("Watch List Container", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<WatchListContainer followedShows={anime} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
