import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import ToDoList from './ToDoList'

function App () {
  const [todos,changeToDo] = useState([])
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm AddToDo = {changeToDo}  />
        <ToDoList todos = {todos} removeToDo = {changeToDo}/>
      </div>
    );
}

export default App;
