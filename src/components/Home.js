import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

 const dummytodo=['todo1','todo2']; 

export default function Home() {

  const [todos,setTodos]=useState(dummytodo);

  const addTodos=(newTodo)=>{

    setTodos([...todos,newTodo]);


  }


  return (
    <div>

      <NewTodo onTodo={addTodos}/>
      <Todos todos={todos} />

    </div>
  )
}
