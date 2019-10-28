import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState( {
      todos: [ ...this.state.todos, newTask ]
    } )
  }

  filterCompleted = () => {};

  toggleCompleted = id => {
    this.setState( {
      todos: this.state.todos.map( task => {
        if  ( task.id === id ) { return { ...task, completed: !task.completed };
        } else { return task; }
      } )
    } );
  };

  clearCompleted = () => {
    this.setState( {
      todos: this.state.todos.filter( task => !task.completed )
    } );
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={ this.addTask } />
        </div>
        <TodoList
          toggleCompleted={ this.toggleCompleted }
          clearCompleted={ this.clearCompleted }
          todos={ this.state.todos }
        />
      </div>
    );
  }
}

export default App;
