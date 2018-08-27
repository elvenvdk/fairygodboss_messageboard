import * as types from "./types";

export const addPost = items => dispatch => {
  console.log(items);
  dispatch({
    type: types.ADD_POST,
    payload: items
  });
};

export const getPosts = () => dispatch => {
  dispatch({
    type: types.GET_POSTS
  });
};

export const selectPost = id => dispatch => {
  dispatch({
    type: types.SELECT_POST,
    payload: id
  });
};

export const addResponse = (id, responseItems) => dispatch => {
  dispatch({
    type: types.ADD_RESPONSE,
    payload: responseItems
  });
};
