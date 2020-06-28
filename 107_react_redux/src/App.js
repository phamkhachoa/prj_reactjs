import React, { Component } from 'react';
import News from './News';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <News />
        {this.props.dulieu}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);