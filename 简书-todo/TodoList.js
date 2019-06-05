import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>增加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <li onClick={this.handleItemDelete.bind(this)}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleBtnClick = () => {
    const newList = [this.state.inputValue, ...this.state.list];
    this.setState({
      list: newList,
      inputValue: ''
    });
  };

  handleItemDelete = index => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };
}

export default TodoList;
