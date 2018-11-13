import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Dima', age: 27 },
      { name: 'Nastya', age: 21 }
    ]
  }

  switchNameHandler = () => {
    console.log('Click button');
    this.setState({
      person: [
        { name: 'Ivan', age: 28 },
        { name: 'Dima', age: 27 },
        { name: 'Nastya', age: 21 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I am React!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Music</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
