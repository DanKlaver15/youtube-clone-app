import React from "react";
import { connect } from "react-redux";

const Video = ({ video }) => {
  return video ? (
    <iframe
      title={video.snippet.title}
      id="player"
      type="text/html"
      width="640"
      height="390"
      src={`http://www.youtube.com/embed/${video.id.videoId}`}
      frameborder="0"
    ></iframe>
  ) : (
    <p>No video selected</p>
  );
};

const mapStateToProps = (state) => ({
  video: state.activeVideo,
});

export default connect(mapStateToProps)(Video);
