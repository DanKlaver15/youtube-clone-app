export const LOAD_VIDEOS_IN_PROGRESS = "LOAD_VIDEOS_IN_PROGRESS";
export const loadVideosInProgress = () => ({
  type: LOAD_VIDEOS_IN_PROGRESS,
});

export const LOAD_VIDEOS_IN_SUCCESS = "LOAD_VIDEOS_IN_SUCCESS";
export const loadVideosInSuccess = (videos) => ({
  type: LOAD_VIDEOS_IN_SUCCESS,
  payload: { videos },
});

export const LOAD_VIDEOS_IN_FAILURE = "LOAD_VIDEOS_IN_FAILURE";
export const loadVideosInFailure = () => ({
  type: LOAD_VIDEOS_IN_FAILURE,
});

export const LOAD_COMMENTS_IN_PROGRESS = "LOAD_COMMENTS_IN_PROGRESS";
export const loadCommentsInProgress = () => ({
  type: LOAD_COMMENTS_IN_PROGRESS,
});

export const LOAD_COMMENTS_IN_SUCCESS = "LOAD_COMMENTS_IN_SUCCESS";
export const loadCommentsInSuccess = () => ({
  type: LOAD_COMMENTS_IN_SUCCESS,
});

export const LOAD_COMMENTS_IN_FAILURE = "LOAD_COMMENTS_IN_FAILURE";
export const loadCommentsInFailure = () => ({
  type: LOAD_COMMENTS_IN_FAILURE,
});

export const UPDATE_ACTIVE_VIDEO = "UPDATE_ACTIVE_VIDEO";
export const updateActiveVideo = (video, comments) => ({
  type: UPDATE_ACTIVE_VIDEO,
  payload: { ...video, comments },
});
