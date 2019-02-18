import React, { Component } from 'react';

class Display extends Component {
  render() {
    var style={width:"25%",margin:"0 auto",'text-align':"center",padding:"5%",border:"solid gray",'margin-top':"2%",'font-size':"20px"};
    return (
      <div style={style}>
      <div class="bleh">This is {this.props.name} and my age is {this.props.age}</div>
      </div>
    );
  }
}

export default Display;
