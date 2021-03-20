import React from "react";
import { connect } from "react-redux";

const Video = ({ video }) => {
  return video ? (
    <>
      <div className="video-container">
        <iframe
          title={video.snippet.title}
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allowFullScreen="allowFullScreen"
        ></iframe>
      </div>
      <div className="mt-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {video.snippet.title}
        </h2>
        <p>{video.snippet.description}</p>
      </div>
    </>
  ) : (
    <p>No video selected</p>
  );
};

const mapStateToProps = (state) => ({
  video: state.activeVideo,
});

export default connect(mapStateToProps)(Video);
