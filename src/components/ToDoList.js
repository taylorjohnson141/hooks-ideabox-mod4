import React, { Component } from 'react';
import {connect} from 'react-redux'
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
const mapStateToProps = state => ({ todos: state.todos })
 export default connect (mapStateToProps,null)(ToDoContainer)