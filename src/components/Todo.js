import React from 'react'

export default function Todo(props) {
  return (
    <div>

        <p key={props.index}>{props.todo}</p>

      
    </div>
  )
}
