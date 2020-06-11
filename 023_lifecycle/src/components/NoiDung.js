import React, { Component } from 'react';

class NoiDung extends Component {

    componentWillReceiveProps(nextProps, nextState){
        console.log('componentWillReceiveProps1 running...');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate1 running...');
        return true;
      }
    
      componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate1 running...');
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate1 running...');
      }

    render() {
        return (
            <div>
                <h4>Xin chào: {this.props.name}</h4>
            </div>
        );
    }
}

export default NoiDung;