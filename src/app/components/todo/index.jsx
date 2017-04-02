import React from 'react';
import TodoItem from './todo_item';

const todoFakeData = [
  { id: 1, title: 'Demo for react', done: true },
  { id: 2, title: 'Demo for redux', done: false },
  { id: 3, title: 'Demo for react-redux', done: false }
];

function Todo() {
  const todos = (todoData) => todoData.map((todo) => {
    console.log(todo)
    return <TodoItem todo={todo} />
  });
  return (
    <div className="container todo">
      <h1>Todo</h1>
      {todos(todoFakeData)}
    </div>
  );
}

export default Todo;
