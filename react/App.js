import React, { Component } from 'react';
import Display from './Display'
import './Myapp.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="chh"> <h3>Date : 15/02/2019 Friday</h3></div>
      <h1 className="heading"> MY FIRST APP </h1>
      <p> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Display  name="Simerpreet" age="20" birthmonth="October"/>
      <Display name="Gunbir" age="20" birthmonth="October"/>

      </div>
    );
  }
}

export default App;
