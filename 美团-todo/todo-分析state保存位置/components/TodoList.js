import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
