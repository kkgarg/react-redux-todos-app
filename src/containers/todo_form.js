import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class TodoForm extends Component {
  constructor(props) {
      super(props);
      this.state = { todo: '' };

      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onCancelClick = this.onCancelClick.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }

  onCancelClick(event) {
    event.preventDefault();
    this.setState({todo: ''});
  }

  onInputChange(event) {
    this.setState({todo: event.target.value});
  }

  render() {
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input
              value={this.state.todo}
              placeholder="Write your todo here..."
              onChange={this.onInputChange}
            />
            <button type="Submit">Add</button>
            <button onClick={this.onCancelClick}>Cancel</button>            
          </form>       
        </div>
      );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({addTodo}, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm);

