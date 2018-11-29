import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//refactor to be a fetch (somewhere), switch port on reduxMocks to 8080.
var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;
