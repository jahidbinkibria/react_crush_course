import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {


  // css variale
  itemStyle = () =>{
    return{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.complete ? 'line-through' : "none"
    }
  }

  


  render() {
    console.log(this.props.todo)
    return (
        
      <div style={this.itemStyle()}> 
        {/* passsing data as props */}
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
        {this.props.todo.title}
        <button style={btnStyle} onClick={this.props.buttonClick.bind(this, this.props.todo.id)}>X</button>
        </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    buttonClick: PropTypes.func.isRequired
}


const btnStyle = {
  background: '#cccccc',
  fontSize: '12px',
  color: 'red',
  borderRadius: '50%',
  padding: '6px 8px',
  float: 'right',
  border: 'none',
  cursor: 'pointer'
}


export default Todoitem
