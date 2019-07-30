import React from "react";
import { shallow } from "enzyme";
import { AnimeSnippet } from "./AnimeSnippet";

let props = {
  id: 1,
  enTitle: "Life of TronKat",
  jpTitle: "Tronkat no Life desu",
  posterImage: {
    small: "https://i.imgur.com/vihivug.jpg",
    tiny: null
  }
};
let props2 = {
  id: 1,
  enTitle: null,
  jpTitle: "Tronkat no Life desu",
  posterImage: {
    small: "https://i.imgur.com/vihivug.jpg",
    tiny: null
  }
};

describe("Anime Snippet", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<AnimeSnippet {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when it isFav is true", () => {
    wrapper = shallow(<AnimeSnippet {...props} isFav={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    wrapper.setState({ title: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state property", () => {
    expect(wrapper.state()).toEqual({ title: false });
  });

  it("should change state when handleEnter is called", () => {
    wrapper.instance().handleEnter();
    expect(wrapper.state()).toEqual({ title: true });
  });

  it("should change state when handleLeave is called", () => {
    wrapper.setState({ title: true });
    wrapper.instance().handleLeave();
    expect(wrapper.state()).toEqual({ title: false });
  });

  it("should return english title from TitleToDisplay", () => {
    expect(wrapper.instance().titleToDisplay()).toEqual("Life of TronKat");
  });

  it("should return japanese title from TitleToDisplay", () => {
    wrapper = shallow(<AnimeSnippet {...props2} />);
    expect(wrapper.instance().titleToDisplay()).toEqual("Tronkat no Life desu");
  });

  it("should return anime/id url from checkIsFav", () => {
    expect(wrapper.instance().checkIsFav()).toEqual("/anime/1");
  });

  it("should return watchlist/id url from checkIsFav", () => {
    wrapper = shallow(<AnimeSnippet {...props} isFav={true} />);
    expect(wrapper.instance().checkIsFav()).toEqual("/watchlist/1");
  });
});
