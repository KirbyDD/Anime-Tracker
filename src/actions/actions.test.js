import * as actions from "./index";

describe("actions", () => {
  it("should have a type of ADD_SHOW", () => {
    const show = {};
    const expectedAction = {
      type: "ADD_SHOW",
      show: {}
    };
    const result = actions.addShow(show);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_SHOW", () => {
    const id = 1;
    const expectedAction = {
      type: "REMOVE_SHOW",
      id: 1
    };
    const result = actions.removeShow(id);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GATHER_ANIME", () => {
    const data = [];
    const expectedAction = {
      type: "GATHER_ANIME",
      data: []
    };
    const result = actions.gatherAnime(data);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GATHER_MORE_ANIME", () => {
    const data = [];
    const expectedAction = {
      type: "GATHER_MORE_ANIME",
      data: []
    };
    const result = actions.gatherMoreAnime(data);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_SHOW", () => {
    const value = "Value";
    const id = 1;
    const expectedAction = {
      type: "UPDATE_CURR_EP",
      id: 1,
      value: "Value"
    };
    const result = actions.updateCurrentEpisode(id, value);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_SHOW", () => {
    const comment = "Comment";
    const id = 1;
    const expectedAction = {
      type: "UPDATE_COMMENT",
      id: 1,
      comment: "Comment"
    };
    const result = actions.updateCurrentComment(id, comment);
    expect(result).toEqual(expectedAction);
  });
});
