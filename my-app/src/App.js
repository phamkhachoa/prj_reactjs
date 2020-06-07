import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Vi du ve ham map()
const so = [1,2,3,4,5,6]
const so2 = so.map((x) => x*2 + ",")

class App2 extends Component {
  render () {
    return (
      <div>
        {so2}
      </div>
    );
  }
}




// Su dung props cach 1
function NumberOne (props) {
  return (
      <div class="col-6">
              <div class="card text-left">
                <img class="card-img-top" src={props.imgSrc} alt="" height="300px" width="700px" />
                <div class="card-body">
                  <h4 class="card-title">{props.title}</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
  )
}

// Cach 2: Su dung class de dinh nghia va thao tac voi props

class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
        <div class="card text-left">
                <img class="card-img-top" src={this.props.imgSrc} alt="" height="300px" width="700px" />
                <div class="card-body">
                  <h4 class="card-title">{this.props.title}</h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <App2 />
        </a>
      </header>

      <div class="container">
          <div class="row">
          <NumberOne title="San Pham 1" imgSrc="https://kenh14cdn.com/thumb_w/620/2020/6/7/photo-1-15914660931751865685965.jpg"/>
          <NumberOne title="San Pham 2" imgSrc="https://kenh14cdn.com/thumb_w/620/2020/6/7/photo-1-15914660955012062079285.jpg"/>
          <NumberTwo title="TH TrueMilk" imgSrc="https://kenh14cdn.com/thumb_w/620/2020/6/7/photo-1-15914660955012062079285.jpg"/>
          <NumberTwo title="Travel Blogger" imgSrc="https://kenh14cdn.com/thumb_w/620/2020/6/7/photo-1-15914660955012062079285.jpg"/>
          </div>
      </div>

    </div>
  );
}

export default App;
