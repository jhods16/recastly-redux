import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
  currentVideo,
  videoList
});

// (state = {videoList: [], currentVideo: null}, action) => {

  // if (action.type === undefined) {
  //   return state;
  // }
  // if (action.type === 'CHANGE_VIDEO_LIST') {
  //   return { ...state, videoList: videoList(state, action)}
  // }
  
  // if (action.type === 'CHANGE_VIDEO') {
  //   return { ...state, currentVideo: currentVideo(state, action)}
//   }


// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
