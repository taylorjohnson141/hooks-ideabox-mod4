import React, { useState } from 'react';
import './ToDo.css'
function ToDo({todo,removeToDo}) {
  return (

    <article className = 'article'>
      <p>{todo.todo}</p>
      <button onClick ={removeToDo() }> Delete todo</button>
    </article>
  )
}

export default ToDo
