import React from 'react'
import Todos from './Todos';

export default function Home() {

  const todos=['todo1','todo2']; 


  return (
    <div>

      <Todos todos={todos}/>

    </div>
  )
}
