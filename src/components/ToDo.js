import React, { Component } from 'react'
import './ToDo.css'
import {connect} from 'react-redux'
import removeToDo from '../actions/removeToDo'
function ToDo(props) {
  return (

    <article className = 'article'>
      <p>{props.todo.todo}</p>
      <button onClick ={ () => props.removeToDo(props.todo.id)}> Delete todo</button>
    </article>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    removeToDo: (todo) => dispatch(removeToDo(todo)),
  }
}
export default connect(null,mapDispatchToProps)(ToDo)
