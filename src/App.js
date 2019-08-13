import React from 'react';
import Header from './/components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learning React',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Learning Liquid',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learning GraphQl',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Completing Interview Task',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
      this.setState ( {
        todos : this.state.todos.map((todo) => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      } );
  }

  delTodo = (id) => {
    this.setState ( {
      todos : this.state.todos.filter( todo => {
        if(todo.id === id){
          return false;
        }
        return true;
      })
    } );
  }

  addTodo = (title) => {
    const newTodo = {
      id : uuid.v4(),
      title : title,
      completed : false
    }
    this.setState({ todos : [...this.state.todos, newTodo] });
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div> 
      </div>
    );
  }
}

export default App;
