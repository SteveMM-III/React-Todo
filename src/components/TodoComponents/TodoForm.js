import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask( this.state.newTask );
    this.setState(  { newTask: '' } );
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={ this.state.newTask }
          onChange={ this.handleChanges }
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
