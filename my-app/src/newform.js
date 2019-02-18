import React,{ Component } from 'react';
class NewForm extends Component{
  state={
    name:null,
    age:null,
    birthmonth:null,
  }
  handleChange={e}=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  render(){

    return{
      <form>
      <label>Name</label>
      <input type="text" id='name' onChange={this.handleChange}><br/>
      <label>Age</label>
      <input type="text" id='age' onChange={}><br/>
      <label>Birthmonth</label>
      <input type="text" id='birthmonth' onChange={}><br/>
      </form>
    }
  }
}
export default NewForm;
