import axios from "axios";
import { apiKey } from "../apiKey";
import { videos } from "../testData";

import {
  loadVideosInProgress,
  loadVideosInFailure,
  loadVideosInSuccess,
  loadCommentsInProgress,
  loadCommentsInFailure,
  loadCommentsInSuccess,
  updateActiveVideo,
} from "./actions";

export const loadVideos = (searchParam) => async (dispatch, getState) => {
  try {
    dispatch(loadVideosInProgress());

    // const response = await axios.get(
    //   `https://www.googleapis.com/youtube/v3/search?q=${searchParam}&key=${apiKey}&maxResults=20&part=snippet&type=video`
    // );

    // const videos = await response.data.items;

    dispatch(loadVideosInSuccess(videos));
  } catch (err) {
    dispatch(loadVideosInFailure());
    console.log(err);
  }
};

export const loadComments = (video) => async (dispatch, getState) => {
  try {
    dispatch(loadCommentsInProgress());

    const response = await axios.get(
      `http://localhost:5000/api/comments/${video.id.videoId}`
    );

    const comments = await response.data;

    dispatch(loadCommentsInSuccess());
    dispatch(updateActiveVideo(video, comments));
  } catch (err) {
    dispatch(loadCommentsInFailure());
    console.log(err);
  }
};
