import React from "react";
import { connect } from "react-redux";
import { updateActiveVideo } from "../videos/actions";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {videos.map((video) => {
        return (
          <VideoListItem
            key={video.id.videoId}
            video={video}
            onSelect={onVideoSelect}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
