import React, { Component } from 'react';
import AddTodoList from './AddTodoList';
import TodoList from './TodoList';
import Todo from './Todo';
import Footer from './Footer';

const todos = [
  {
    id: 1,
    text: '学习react',
    completed: true
  },
  {
    id: 2,
    text: '学习redux',
    completed: false
  },
  {
    id: 3,
    text: '学习react router',
    completed: true
  }
];

const filter = 'all';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodoList />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }
}

export default App;
