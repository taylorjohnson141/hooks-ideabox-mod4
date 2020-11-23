import React, { useState } from 'react';
import addToDo from '../actions/addToDo'
import {connect} from 'react-redux'

function AddTodoForm () {
  const [name, setName] = useState("");

  submitForm = async (e) => {
    if(!name){
      e.preventDefault()
      alert('Can not create an empty to-do')
      return
    }
    e.preventDefault()
   this.props.addToDo(this.state.todo)
    this.setState({ todo: '' });

  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={e => setIdea(e.target.value)} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}


export default AddTodoForm

