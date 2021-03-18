import {
  LOAD_VIDEOS_IN_PROGRESS,
  LOAD_VIDEOS_IN_SUCCESS,
  LOAD_VIDEOS_IN_FAILURE,
  UPDATE_ACTIVE_VIDEO,
  LOAD_COMMENTS_IN_PROGRESS,
  LOAD_COMMENTS_IN_SUCCESS,
  LOAD_COMMENTS_IN_FAILURE,
} from "./actions";

export const activeVideo = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ACTIVE_VIDEO: {
      return payload;
    }
    default:
      return state;
  }
};

export const isCommentsLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_COMMENTS_IN_SUCCESS: {
      return false;
    }
    case LOAD_COMMENTS_IN_PROGRESS: {
      return true;
    }
    case LOAD_COMMENTS_IN_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_VIDEOS_IN_SUCCESS: {
      return false;
    }
    case LOAD_VIDEOS_IN_PROGRESS: {
      return true;
    }
    case LOAD_VIDEOS_IN_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const videos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_VIDEOS_IN_SUCCESS: {
      const { videos } = payload;
      return videos;
    }
    case LOAD_VIDEOS_IN_PROGRESS:
    case LOAD_VIDEOS_IN_FAILURE:
    default:
      return state;
  }
};
