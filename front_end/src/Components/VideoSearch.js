import React, { useState } from "react";
import { connect } from "react-redux";
import { loadVideos } from "../videos/thunks";

const VideoSearch = ({ videos, onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <>
      {/* Mobile */}
      <div className="relative py-5 flex items-center justify-center lg:justify-between">
        <div className="flex-1 min-w-0 px-12 lg:hidden">
          <div className="max-w-xs flex w-full mx-auto">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative flex items-stretch flex-grow text-white focus-within:text-gray-600">
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                id="search"
                className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
            <button
              disabled={input.length < 3}
              onClick={() => {
                setInput("");
                onSearch(input);
              }}
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-r-md text-gray-700 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
            >
              <svg
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Desktop(full-width) */}
      <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-start-3">
            <div className="max-w-md flex w-full mx-auto rounded-md">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative flex items-stretch flex-grow text-white focus-within:text-gray-600">
                <input
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  value={input}
                  id="search"
                  className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border rounded-none rounded-l-md border-transparent leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
              <button
                disabled={input.length < 3}
                onClick={() => {
                  setInput("");
                  onSearch(input);
                }}
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-r-md text-gray-700 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
              >
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  videos: state.videos,
});
const mapDispatchToProps = (dispatch) => ({
  onSearch: (input) => {
    dispatch(loadVideos(input));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearch);
