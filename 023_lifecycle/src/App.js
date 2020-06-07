import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangthai: "Khoi tao."
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount running...');
  }

  componentDidMount() {
    console.log('componentDidMount running...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate running...');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate running...');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate running...');
  }
  
  capNhatState = () => {
    this.setState({
      trangthai: "Trang thai duoc update."
    })
  }
  
  
  render() {
    console.log('This is render...');
    console.log(this.state.trangthai);
    return (
      <div>
        <button onClick={() => this.capNhatState()}> Click</button>
      </div>
    );
  }
}

export default App;