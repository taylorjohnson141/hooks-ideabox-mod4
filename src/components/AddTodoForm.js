import React, { Component } from 'react'
import addToDo from '../actions/addToDo'
import {connect} from 'react-redux'

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = async (e) => {
    if(!this.state.todo){
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
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}


export default AddTodoForm

