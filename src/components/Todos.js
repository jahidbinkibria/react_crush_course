import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todoitem  from './Todoitem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
         <Todoitem key = {todo.id} todo={todo} markComplete={this.props.markComplete} buttonClick={this.props.buttonClick}/>
    ))
  }
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    markComplete: PropTypes.func.isRequired,
    buttonClick: PropTypes.func.isRequired
}


export default Todos;
