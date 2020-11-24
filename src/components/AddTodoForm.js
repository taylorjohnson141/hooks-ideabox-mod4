import React, { useState } from 'react';


function AddTodoForm ({todos,addToDo}) {
  const [name, createToDo] = useState("");

  let submitForm =  async (e) => {
    if(!name){
      e.preventDefault()
      alert('Can not create an empty to-do')
      return
    }
    e.preventDefault()
  addToDo([...todos,name])
  console.log([...todos,name])

  createToDo('');

  }

    return (
      <section>
        <form onSubmit={submitForm}>
          <input
            value={name}
            placeholder="Add A Todo"
            onChange={e => createToDo(e.target.value)} />
          <button>Add Todo</button>
        </form>
      </section>
    )
}


export default AddTodoForm

