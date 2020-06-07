import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <Content title="Cach su dung props bang class" vitri="order-lg-2" imgSrc="img/01.jpg"/>
      <Content title="Tin Tuc So 2" imgSrc="img/02.jpg"/>
      <Content title="Tin Tuc So 3" vitri="order-lg-2" imgSrc="img/03.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;
