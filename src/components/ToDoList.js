import React from 'react';
import ToDo from './ToDo'
import './ToDo.css'
function ToDoList (todos,removeToDo){
  return todos.map((todo,index) =>{
    return <ToDo key= {index} todo ={todo} removeToDo ={removeToDo}/>
  })
}
function ToDoContainer ({todos,removeToDo}){
    if(!todos,length ){
      return <span>Add a todo!</span>
    }
    return <section className = 'to-do-container'>
      {ToDoList(todos,removeToDo)}
    </section>
  
}
 export default ToDoContainer