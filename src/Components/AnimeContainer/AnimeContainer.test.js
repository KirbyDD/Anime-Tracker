import React from "react";
import { shallow } from "enzyme";
import { AnimeContainer } from "./AnimeContainer";

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
});
