import React from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

export default function Home() {

  const todos=['todo1','todo2']; 


  return (
    <div>

      <NewTodo/>
      <Todos todos={todos}/>

    </div>
  )
}
