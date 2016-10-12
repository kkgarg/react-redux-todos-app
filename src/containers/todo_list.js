import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  
    render() {
      return (
        <ul>
            {/* this.props.todos.map(function(todoItem) { return <li key={todoItem}>{todoItem}</li>}) */}
            {this.props.todos.map(todoItem => <li key={todoItem}>{todoItem}</li>)}
        </ul>
      );
  }
}

function mapStateToProps(state) {
  return {
      todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);

