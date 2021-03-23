import axios from "axios";

import {
  addComment,
  updateComment,
  loadCommentsInProgress,
  loadCommentsInSuccess,
  loadCommentsInFailure,
} from "./actions";

export const addCommentRequest = (comment, videoId) => async (
  dispatch,
  getState
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/comments/${videoId}`,
      comment
    );

    const addedComment = response.data;

    dispatch(addComment(addedComment));
  } catch (err) {
    console.log(err);
  }
};

export const updateCommentRequest = (comment) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/comments/${comment._id}`,
      comment
    );

    const updatedComment = response.data;

    dispatch(updateComment(updatedComment));
  } catch (err) {
    console.log(err);
  }
};

export const loadCommentsRequest = (videoId) => async (dispatch, getState) => {
  try {
    dispatch(loadCommentsInProgress());

    const response = await axios.get(
      `http://localhost:5000/api/comments/${videoId}`
    );

    const comments = await response.data;

    dispatch(loadCommentsInSuccess(comments));
  } catch (err) {
    dispatch(loadCommentsInFailure());
    console.log(err);
  }
};
