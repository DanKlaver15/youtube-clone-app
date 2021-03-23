import React, { useState } from "react";

const AddReplyInput = ({ comment, onSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <div className="my-2">
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700 sr-only"
      >
        Reply...
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="comment"
            id="comment"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            placeholder="Reply..."
            value={input}
          />
        </div>
        <button
          disabled={input.length < 3}
          onClick={() => {
            setInput("");
            comment.replies = [...comment.replies, { text: input }];
            onSubmit(comment);
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
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <span>Reply</span>
        </button>
      </div>
    </div>
  );
};

export default AddReplyInput;
