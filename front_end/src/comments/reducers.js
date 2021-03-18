import {
  LOAD_COMMENTS_IN_PROGRESS,
  LOAD_COMMENTS_IN_SUCCESS,
  LOAD_COMMENTS_IN_FAILURE,
} from "./actions";

export const commentsLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_COMMENTS_IN_PROGRESS: {
      return true;
    }
    case LOAD_COMMENTS_IN_FAILURE: {
      return false;
    }
    case LOAD_COMMENTS_IN_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_COMMENTS_IN_SUCCESS: {
      const { comments } = payload;
      return comments;
    }
    default:
      return state;
  }
};
