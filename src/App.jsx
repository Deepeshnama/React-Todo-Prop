import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";

const App = () => {

  const [todos, setTodos] = useState([])


  // Edit State

  const [edit , setEdit] = useState({
    todo : {} ,
    editMode : false ,
  })

  // console.log(edit)

  // Edit Todo

  const editTodo = (oldTodo) => {

     setEdit({
      todo : oldTodo , 
      editMode : true ,
     })

  }

  // Update Todo

  const updateTodo = (oldId , newText) => {

    setTodos(
      todos.map((item) =>
     item.id === oldId ? {id : oldId , text : newText} : item
      )
    );

    setEdit({
      todo : {} ,
      editMode : false ,
    })

  };



  // Delete Todo

  const deleteTodo = (id) => {
     setTodos(todos.filter((item) => {

       if(item.id !== id) {
         return true;
       }

     }))
  }


  // saveTodo

  const saveTodo = (text) => {
    
    const newTodo = {
      id : crypto.randomUUID() ,
      text : text ,
    }

    setTodos([newTodo , ...todos])

  }


  return (
    <>
      <Navbar todos = {todos} />

      <div className="container p-5">
        <Form saveTodo = {saveTodo} edit = {edit} updateTodo = {updateTodo} />

        <ListGroup todos = {todos} deleteTodo = {deleteTodo} editTodo = {editTodo} />
      </div>
    </>
  );
};

export default App;
