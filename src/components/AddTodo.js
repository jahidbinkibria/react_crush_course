import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {

  //have the from value as state
  state = {
    title: ''
  }


  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({
      //work with name attar 
      [e.target.name]: e.target.value
    });


  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input 
            type="text" 
            name="title" 
            placeholder="Add ToDo ...."
            style={{flex: 10, padding: '5px'}}
            value = {this.state.title}
            onChange = {this.onChange}
          />
          <input 
            type="submit"
            value="submit"
            className="btn"
            // innerCss
            style = {{flex: 1}}
          />
      </form>
    )
  }
}



AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}


export default AddTodo
