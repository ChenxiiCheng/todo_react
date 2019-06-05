import React, { Component } from 'react';
import AddTodoList from './AddTodoList';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all'
    };
    this.nextTodoId = 0;
  }
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.props;
    return (
      <div className="App">
        <AddTodoList addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        />
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

  //添加待办事项
  addTodo = text => {
    //创建新的todo
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  //更改待办事项的状态（complete:true/false)
  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    this.setState({
      todos: newTodos
    });
  };

  //修改Filter
  setVisibilityFilter = filter => {
    this.setState({
      filter
    });
  };
}

export default App;
