import React, { Component } from 'react';
import TodoItem from './todo_item';

const todoFakeData = [
  { id: 1, title: 'Demo for react', done: true },
  { id: 2, title: 'Demo for redux', done: false },
  { id: 3, title: 'Demo for react-redux', done: false }
];

class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: todoFakeData };
  }

  changeTodoState(id) {
    let newTodos = Object.assign([], this.state.todos)
    newTodos.forEach( todo => {
      if(todo.id == id){ todo.done = !todo.done}
    })
    this.setState({todos: newTodos})
  }

  render() {
    const todos = (todoData) => todoData.map((todo) => {
      return <TodoItem todo={todo} action={::this.changeTodoState} />;
    });
    return (
      <div className="container todo">
        <h1>Todo</h1>
        {todos(this.state.todos)}
      </div>
    );
  }
}

export default Todo;
