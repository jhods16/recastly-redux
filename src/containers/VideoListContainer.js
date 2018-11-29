import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (state) => {


 
  return ({
    videos: state.videoList
  });

  // var mapDispatchToProps = dispatch => {
  //   return ({
  //     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  //   });
  // };



  // return ({
  //   videos: state.videoList,
  //   handleVideoListEntryTitleClick: dispatch => {
  //     (video) => dispatch(changeVideo(video))
  // });

};

var mapDispatchToProps = dispatch => {
  return ({
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  });
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(VideoListContainer, mapDispatchToProps)(VideoList);


