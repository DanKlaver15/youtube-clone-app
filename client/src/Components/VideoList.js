import React from "react";
import { connect } from "react-redux";
import { loadCommentsRequest } from "../comments/thunks";
import { updateActiveVideo } from "../videos/actions";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, isLoading, onVideoSelect, onLoadComments }) => {
  const onSelect = (video) => {
    onVideoSelect(video);
    onLoadComments(video.id.videoId);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : videos.length > 0 ? (
    <ul className="divide-y divide-gray-200">
      {videos.map((video) => {
        return (
          <VideoListItem
            key={video.id.videoId}
            video={video}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  ) : (
    <p>No videos found.</p>
  );
};

const mapStateToProps = (state) => ({
  videos: state.videos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onVideoSelect: (video) => dispatch(updateActiveVideo(video)),
  onLoadComments: (videoId) => dispatch(loadCommentsRequest(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
