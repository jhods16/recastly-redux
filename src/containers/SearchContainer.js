import React from 'react';
import Search from '../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';


var mapStateToProps = (state) => ({});

var mapDispatchToProps = (dispatch) => {

  return ({
    handleSearchInputChange: (query) => dispatch(handleVideoSearch(query))
  });
};


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
// debugger;
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
