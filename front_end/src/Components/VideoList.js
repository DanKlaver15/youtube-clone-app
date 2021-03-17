import React from "react";
import { connect } from "react-redux";
import { updateActiveVideo } from "../videos/actions";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {videos.map((video) => {
        return (
          <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <button
                  onClick={() => onVideoSelect(video)}
                  className="block focus:outline-none"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  <p className="line-clamp-2 text-sm font-medium text-gray-900 text-left">
                    {video.snippet.title}
                  </p>
                </button>
              </div>
              <time
                datetime="2021-01-27T16:35"
                className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >
                {video.snippet.publishedAt.split("T")[0]}
              </time>
            </div>
            <div className="mt-1">
              <p className="line-clamp-2 text-sm text-gray-600">
                {video.snippet.description}
              </p>
            </div>
          </li>
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
