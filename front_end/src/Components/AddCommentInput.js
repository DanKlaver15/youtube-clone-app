import React, { useState } from "react";
import { connect } from "react-redux";
import { addCommentRequest } from "../comments/thunks";

const AddCommentInput = ({ activeVideo, onSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700 sr-only"
      >
        Add comment
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="comment"
            id="comment"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            placeholder="Add comment..."
            value={input}
          />
        </div>
        <button
          disabled={input.length < 3}
          onClick={() => {
            setInput("");
            onSubmit({ text: input }, activeVideo.id.videoId);
          }}
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeVideo: state.activeVideo,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (comment, videoId) => dispatch(addCommentRequest(comment, videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentInput);
