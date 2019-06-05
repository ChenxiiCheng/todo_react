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
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all'
    };
  }
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.props;
    return (
      <div className="App">
        <AddTodoList />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }

  //只有满足filter的todos才传给TodoList组件
  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === 'active') {
        return !item.completed;
      } else if (currentFilter === 'completed') {
        return item.completed;
      } else {
        return true;
      }
    });
  };
}

export default App;
