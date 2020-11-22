 let todosReducer = (state = [],action) =>{
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
      case 'REMOVE_TODO':
        let toDoToRemove = state.findIndex(toDo => toDo.id === action.id)
         let copyOfState = [...state]
         copyOfState.splice(toDoToRemove,1)
         return copyOfState
    default:
      return state;
  }
}
export default todosReducer
