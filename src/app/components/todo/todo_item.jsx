import React from 'react';

const TodoItem = (props) => {
  console.log(props)
  return (
    <div>
      <span>{props.todo.id} </span>
      <span>{props.todo.title} </span>
      <span>{props.todo.done ? "yes" : "no"}</span>
    </div>
  )
}

export default TodoItem
