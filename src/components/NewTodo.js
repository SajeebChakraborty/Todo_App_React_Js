import React, { useState } from 'react'

export default function NewTodo(props) {

  const [todo,setTodo]=useState("");


  const onTodoChange=(e)=>{


    setTodo(e.target.value);


  }

  const addTodoSubmit=(e)=>{

    e.preventDefault()
    props.onTodo(todo)
   

  }



  return (
    <div>

        <form onSubmit={addTodoSubmit}>

            <label>Topics</label>

            <input type="text" name="todo" onChange={onTodoChange}></input>

            <input type="submit"></input>


        </form>

      
    </div>
  )
}
