import React from 'react';
import Search from './Search.jsx';

class SearchContainer extends React.Component {
  submit = values => {
    console.log(values);
  }
  render() {
    return <Search onSubmit={this.submit} />
  }
}