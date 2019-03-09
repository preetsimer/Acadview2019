import React, { Component } from 'react';
import Navbar from './nav.js';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
class App extends Component {
  render() {
    // How to pass props inside route tag?
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} /> 
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
