import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Demo from './components/Demo';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
        {/* <Demo /> */}
      </div>
    )
  }
}

