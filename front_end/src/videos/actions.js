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
