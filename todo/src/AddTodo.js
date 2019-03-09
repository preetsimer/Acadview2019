import React, {Component} from 'react';
class Add extends Component{
    state={
        id:null,
        item:null
    }
    handleChange= (e) => {
        this.setState({
          [e.target.id]: e.target.value
        }
        )
      }
      handleSubmit= (e) => {
         e.preventDefault();
        this.props.addInfo(this.state); 
     }
      render(){
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className='todos collection'><input type='text' id='item' placeholder="Add a task!" onChange={this.handleChange}/> <br />
              </div>
              <button className="btn btn-outline-dark"> Add task! </button>
            </form>
          </div>
        )
      }
    }
    
    
    export default Add;