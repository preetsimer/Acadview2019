import React, {Component} from 'react';
import Todo from './Todo';
import Add from './AddTodo';
import './Add.css';
class App extends Component{
  state={
    todos:[
      {
        id:1, item:'do js!'
      },
      {
        id:2, item:'do react!'
      }
    ]
  }
  addInfo = (info) => { 
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
   
    let todos = [...this.state.todos, info];

    this.setState({
      todos: todos
    })
  }
 
  deleteTodo=(id)=>{
   
    let todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todos
  })
  
  }
  render(){
    return(
      <div className="App container">
      <h3 className="center red-text">My TODO's</h3>
      <Todo todos={this.state.todos} deleteTodo ={this.deleteTodo}/>
      <Add addInfo={this.addInfo} />
      </div>
    );
  }
}
export default App;