import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' ;
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid'; //for genarate random num
import About from './components/pages/About';
import './App.css';
import axios from 'axios';

class App extends Component {


  state = {
    //having data from http request
    todos: []
  }

  //for http request
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
       .then(res =>  this.setState({todos: res.data}) )
  }

  //toggleing the complete sign
  markComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id ){
          todo.complete = !todo.complete
          
        }
        return todo
        
      }),
    });
  }


  //delete todo "info didn't understand how soman tai filter hobe :D"
  buttonClick = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id )] }));
  }

  //add todo
  addTodo = (title) => {

    //making post on server by http req
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      complete: false,
    }).then(res => this.setState({todos:[...this.state.todos, res.data]}))
  }


  render() {
    console.log(this.state)
    return (
      //component needs to grabe by router
      <Router>
        <div className="App">
          <div className="container">
            <Header />

              {/* render for multiple value  exect for excet location*/}
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} buttonClick = {this.buttonClick}/>
              </React.Fragment>
            )}/>

            <Route path="/about" component={About}/>
           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
