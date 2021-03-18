export const LOAD_COMMENTS_IN_PROGRESS = "LOAD_COMMENTS_IN_PROGRESS";
export const loadCommentsInProgress = () => ({
  type: LOAD_COMMENTS_IN_PROGRESS,
});

export const LOAD_COMMENTS_IN_SUCCESS = "LOAD_COMMENTS_IN_SUCCESS";
export const loadCommentsInSuccess = (comments) => ({
  type: LOAD_COMMENTS_IN_SUCCESS,
  payload: { comments },
});

export const LOAD_COMMENTS_IN_FAILURE = "LOAD_COMMENTS_IN_FAILURE";
export const loadCommentsInFailure = () => ({
  type: LOAD_COMMENTS_IN_FAILURE,
});

export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  payload: { comment },
});

export const ADD_COMMENT = "ADD_COMMENT";
export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: { comment },
});

export const UPDATE_COMMENTS = "UPDATE_COMMENTS";
export const updateComments = (comment) => ({
  type: UPDATE_COMMENTS,
  payload: { comment },
});
