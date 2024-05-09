import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({todos , deleteTodo , editTodo}) => {
  return (
    <ul className='list-group my-3'>
      {
        todos.map((todo) => (
          <ListItems key = {todo.id} todo = {todo} deleteTodo = {deleteTodo} editTodo = {editTodo} />
        ))
      }
    </ul>
  )
}

export default ListGroup