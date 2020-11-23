import React from 'react';
import ToDo from './ToDo'
import './ToDo.css'
function ToDoList (todos){
  console.log(todos)
  return todos.map((todo,index) =>{
    return <ToDo key= {index} todo ={todo}/>
  })
}
function ToDoContainer (props){
    if(!props.todos.length ){
      return <span>Add a todo!</span>
    }
    return <section className = 'to-do-container'>
      {ToDoList(props.todos)}
    </section>
  
}
 export default ToDoContainer