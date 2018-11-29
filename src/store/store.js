import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

var initialState = {videoList: [], currentVideo: null};

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)  
);

