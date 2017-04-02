import React from 'react';

const TodoItem = (props) => {
  const checkboxChangeHandler = (ev) => {
    console.log(ev.target.name)
    props.action(ev.target.name)
  }
  return (
    <div>
      <span>{props.todo.id} </span>
      <span>{props.todo.title} </span>
      <input
        name={props.todo.id}
        type="checkbox"
        onChange={checkboxChangeHandler}
        checked={props.todo.done}
        />
    </div>
  )
}

export default TodoItem
