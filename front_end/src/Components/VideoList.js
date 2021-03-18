import React from "react";
import { connect } from "react-redux";
import { loadCommentsRequest } from "../comments/thunks";
import { updateActiveVideo } from "../videos/actions";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect, onLoadComments }) => {
  const onSelect = (video) => {
    onVideoSelect(video);
    onLoadComments(video.id.videoId);
  };

  return (
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
  );
};

const mapStateToProps = (state) => ({
  videos: state.videos,
  activeVideo: state.activeVideo,
});

const mapDispatchToProps = (dispatch) => ({
  onVideoSelect: (video) => dispatch(updateActiveVideo(video)),
  onLoadComments: (videoId) => dispatch(loadCommentsRequest(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
