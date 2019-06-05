import React, { Component } from 'react';

class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} />
        <button>Add</button>
      </div>
    );
  }
}

export default AddTodoList;
