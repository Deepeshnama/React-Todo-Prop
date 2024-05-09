import React from 'react'

const ListItems = ({todo , deleteTodo , editTodo}) => {
  return (
     <div className="list-group-item">
        <h3 className='display-2'>{todo.text}</h3>

        <p className="text-secondary display-5">id : {todo.id}</p>

        <span className='float-end'>

          <button className="btn btn-warning btn-sm rounded-0 mx-2" onClick={() => editTodo(todo)} >Edit</button>

          <button className="btn btn-danger btn-sm rounded-0" onClick={() => deleteTodo(todo.id)} >Delete</button>

        </span>
     </div>
  )
}

export default ListItems;