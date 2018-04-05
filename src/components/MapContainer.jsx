import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Maps from './Map.jsx';
import Search from './Search.jsx';
import { Provider } from 'react-redux';
import configureStore from '../store/store.js';
import { fetch } from '../actions/stateAction.js';

class MapContainer extends React.Component {
  componentDidMount() {
    let term = `shark`;
    //invoke search method here
    console.log(`this.props: `, this.props);
    this.props.fetchData(term);
  };

  render() {
    return (
      <div>
        <h1>Get Money Go Dumb</h1>
        <Search /> 
        <Maps />
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    maps: state.result,
    search: state.term
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetch(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

