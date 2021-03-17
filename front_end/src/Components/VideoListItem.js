import React from "react";

const VideoListItem = ({ video, onSelect }) => (
  <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
    <div className="flex justify-between space-x-3">
      <div className="min-w-0 flex-1">
        <button
          onClick={() => onSelect(video)}
          className="block focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true"></span>
          <p className="line-clamp-2 text-sm font-medium text-gray-900 text-left">
            {video.snippet.title}
          </p>
        </button>
      </div>
      <time
        dateTime="2021-01-27T16:35"
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

export default VideoListItem;
