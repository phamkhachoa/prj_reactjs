import React from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewDetail from './NewDetail';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Nav />
        <DieuHuongURL />
        <Footer />
    </Router>
  );
}

export default App;
