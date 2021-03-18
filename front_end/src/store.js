import { createStore, combineReducers, applyMiddleware } from "redux";
import { videos, isLoading, activeVideo } from "./videos/reducers";

import { comments, commentsLoading } from "./comments/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  videos,
  isLoading,
  activeVideo,
  comments,
  commentsLoading,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
