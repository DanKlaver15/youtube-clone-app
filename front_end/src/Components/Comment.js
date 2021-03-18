import React from "react";
import avatar from "../images/Brent_Solomon.png";

const Comment = ({ comment, onUpdateComment }) => (
  <li className="list-none px-4 py-4 sm:px-6 rounded-lg bg-white shadow">
    <article aria-labelledby="question-title-41150">
      <div>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <img src={avatar} alt="" width="50" height="50"></img>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Anonymous</p>
            <p className="text-sm text-gray-500">
              {comment.date.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700 space-y-4">
        <p>{comment.text}</p>
      </div>
      <div className="mt-6 flex justify-between space-x-8">
        <div className="flex space-x-6">
          <span className="inline-flex items-center text-sm">
            <button
              onClick={() =>
                onUpdateComment({ ...comment, likes: comment.likes + 1 })
              }
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="font-medium text-gray-900">{comment.likes}</span>
              <span className="sr-only">likes</span>
            </button>
          </span>
          <span className="inline-flex items-center text-sm">
            <button
              onClick={() =>
                onUpdateComment({ ...comment, dislikes: comment.dislikes + 1 })
              }
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
              <span className="font-medium text-gray-900">
                {comment.dislikes}
              </span>
              <span className="sr-only">dislikes</span>
            </button>
          </span>
          <span className="inline-flex items-center text-sm">
            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-gray-900">
                {comment.replies.length}
              </span>
              <span className="sr-only">replies</span>
            </button>
          </span>
        </div>
      </div>
    </article>
  </li>
);

export default Comment;
