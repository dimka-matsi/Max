import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Dima', age: 27 },
      { name: 'Nastya', age: 21 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log('Click button');
  //   this.setState({
  //     person: [
  //       { name: newName, age: 28 },
  //       { name: 'Dima', age: 27 },
  //       { name: 'Nastya', age: 21 }
  //     ]
  //   });
  // }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
    console.log(this.state.showPersons);
  }

  changeNameHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: 28 },
        { name: 'Dima', age: 27 },
        { name: 'Nastya', age: 21 }
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons === true) {
      persons = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} 
            click={() => this.switchNameHandler('Pete')}
            change={this.changeNameHandler}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
          >My Hobbies: Music</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I am React!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
          {persons}
      </div>
    );
  }
}

export default App;
