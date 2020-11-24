import React, {useState,useEffect} from 'react';
import ToDo from './ToDo'
import './ToDo.css'
function ToDoList (todos,removeToDo){
  console.log('runs')
  return todos.map((todo,index) =>{
    return <ToDo key= {index} todo ={todo} todos = {todos}removeToDo ={removeToDo}/>
  })
}
function ToDoContainer ({todos,removeToDo}){

    if(!todos || todos.length === 0){
      return <span>Add a todo!</span>
    }
    return <section className = 'to-do-container'>
    {ToDoList(todos,removeToDo)}
    </section>
  
}
 export default ToDoContainer