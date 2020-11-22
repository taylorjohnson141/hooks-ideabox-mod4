import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import ToDoList from './ToDoList'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList/>
      </div>
    );
  }
}

export default App;
