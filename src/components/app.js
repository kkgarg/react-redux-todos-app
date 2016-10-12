import React, { Component } from 'react';
import TodoForm from '../containers/todo_form';
import TodoList from '../containers/todo_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>A simple Todo App</h3>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
