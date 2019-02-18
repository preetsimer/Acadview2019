import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
  state={
    displayInfo:[
      {name:'john',age:27,birthMonth:'may',id:1 },
        {name:'sups',age:21,birthMonth:'june',id:2 },
          {name:'feebo',age:50,birthMonth:'march',id:3 },
    ]
  }
  render() {

    return (
      <div>
      <h1><center>Hi! I am React App</center></h1>

        <Display name="sups" age="21"/>
      <Display name="ritz" age="21"/>

      </div>

    );
  }
}

export default App;
