import React, { useState } from 'react';
import './ToDo.css'
function ToDo({todo,removeToDo,todos}) {
  return (

    <article className = 'article'>
      <p>{todo}</p>
      <button onClick = {() =>{
        let indexOfArray = todos.indexOf(todo)
        console.log(indexOfArray)
       let newArray = todos.slice()
       newArray.splice(indexOfArray,1)
       console.log('no',newArray)
        removeToDo(newArray)
      }}> Delete todo</button>
    </article>
  )
}

export default ToDo
