import React, { useEffect, useState } from "react";

const Form = ({ saveTodo , edit , updateTodo }) => {

  const [text , setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(edit.editMode) {
      updateTodo(edit.todo.id , text)
    } else {
      saveTodo(text);
    }

    setText("")
  };

  useEffect(() => {
    setText(edit.todo.text)
  } , [edit])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Text"
        className="form-control my-3"
        required
        onChange={(e) => setText(e.target.value)}
        value = {text} 
      />

      <button className="btn btn-success rounded-0 w-100">Save</button>
    </form>
  );
};

export default Form;
