import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
// import { composeWithDevTools } from 'redux-devtools-extension';

// var initialState = {videoList: [], currentVideo: null};

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

